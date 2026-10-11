import { NextRequest, NextResponse } from 'next/server';
import { verifyRazorpaySignature } from '@/lib/razorpay';

export async function POST(req: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      planId,
      isDemoMode,
    } = await req.json();

    if (isDemoMode) {
      // Demo mode success simulation
      return NextResponse.json({
        success: true,
        isDemoMode: true,
        creditsAdded: planId === 'enterprise' ? 1000 : planId === 'pro' ? 250 : 50,
        apiKey: 'dp_live_' + Math.random().toString(36).substring(2, 18),
        message: 'Test payment simulated successfully!',
      });
    }

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { success: false, error: 'Incomplete payment parameters' },
        { status: 400 }
      );
    }

    const isValid = verifyRazorpaySignature({
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      signature: razorpay_signature,
    });

    if (!isValid) {
      return NextResponse.json(
        { success: false, error: 'Invalid payment signature. Verification failed.' },
        { status: 400 }
      );
    }

    const credits = planId === 'enterprise' ? 1000 : planId === 'pro' ? 250 : 50;
    const generatedApiKey = 'dp_live_' + Buffer.from(`${razorpay_payment_id}-${Date.now()}`).toString('base64').substring(0, 24);

    return NextResponse.json({
      success: true,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      creditsAdded: credits,
      apiKey: generatedApiKey,
      message: 'Payment verified successfully! Your credits and API key are active.',
    });
  } catch (error: any) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Payment verification failed' },
      { status: 500 }
    );
  }
}

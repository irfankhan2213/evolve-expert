import { NextRequest, NextResponse } from 'next/server';
import { getRazorpayInstance } from '@/lib/razorpay';

export async function POST(req: NextRequest) {
  try {
    const { planId, amountInInr, customerEmail } = await req.json();

    if (!planId || !amountInInr) {
      return NextResponse.json(
        { error: 'Missing planId or amount' },
        { status: 400 }
      );
    }

    const amountInPaise = Math.round(amountInInr * 100);
    const razorpay = getRazorpayInstance();

    if (!razorpay) {
      // In development or when Razorpay API keys are not yet configured in .env.local,
      // return a test simulated order ID so checkout can be demonstrated smoothly.
      const simulatedOrderId = 'order_demo_' + Math.random().toString(36).substring(2, 10);
      return NextResponse.json({
        success: true,
        isDemoMode: true,
        orderId: simulatedOrderId,
        amount: amountInPaise,
        currency: 'INR',
        keyId: 'rzp_test_placeholder',
        message: 'Running in Test/Demo mode. Add RAZORPAY_KEY_ID in .env.local for production payments.',
      });
    }

    const options = {
      amount: amountInPaise,
      currency: 'INR',
      receipt: `rcpt_${planId}_${Date.now()}`,
      notes: {
        planId,
        customerEmail: customerEmail || 'guest@docupulse.ai',
      },
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      success: true,
      isDemoMode: false,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error: any) {
    console.error('Razorpay order creation error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create order' },
      { status: 500 }
    );
  }
}

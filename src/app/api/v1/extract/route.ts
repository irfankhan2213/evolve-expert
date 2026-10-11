import { NextRequest, NextResponse } from 'next/server';
import { extractDocumentData } from '@/lib/extractor';

/**
 * Universal Extraction Endpoint for RapidAPI and Web Application.
 * RapidAPI headers handled:
 * - 'x-rapidapi-key' or 'x-rapidapi-user'
 * - 'x-rapidapi-proxy-secret'
 */
export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';
    let fileBase64: string | undefined;
    let mimeType: string = 'image/png';
    let rawText: string | undefined;
    let documentTypeHint: string | undefined;

    // Check RapidAPI authentication or public trial quota
    const isRapidApi = Boolean(req.headers.get('x-rapidapi-key') || req.headers.get('x-rapidapi-user'));
    
    if (contentType.includes('application/json')) {
      const body = await req.json();
      fileBase64 = body.image || body.fileBase64 || body.document;
      mimeType = body.mimeType || 'image/png';
      rawText = body.text;
      documentTypeHint = body.documentTypeHint;
    } else if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      const file = formData.get('file') as File | null;
      if (file) {
        mimeType = file.type || 'image/png';
        const bytes = await file.arrayBuffer();
        fileBase64 = Buffer.from(bytes).toString('base64');
      }
      documentTypeHint = (formData.get('documentTypeHint') as string) || undefined;
    }

    const data = await extractDocumentData({
      fileBase64,
      mimeType,
      rawText,
      documentTypeHint,
    });

    return NextResponse.json(
      {
        success: true,
        data,
        meta: {
          platform: isRapidApi ? 'RapidAPI' : 'DocuPulse-Web',
          status: 'success',
          timestamp: new Date().toISOString(),
        },
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-RapidAPI-Key, X-RapidAPI-Host',
        },
      }
    );
  } catch (error: any) {
    console.error('Error in /api/v1/extract:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Internal document extraction error',
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-RapidAPI-Key, X-RapidAPI-Host',
    },
  });
}

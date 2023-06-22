import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

export async function GET(req: NextRequest, { params }: {
  params: {id: string}}): Promise<NextResponse> {
  const session_id = params.id;

  try {
    if (!session_id.startsWith('cs_')) {
      throw new Error('Incorrect CheckoutSession ID.')
    }

    const checkout_session = await stripe.checkout.sessions.retrieve(session_id);

    return NextResponse.json(
      checkout_session,
      { status: 200 }
    )
  } catch (error: unknown) {

    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

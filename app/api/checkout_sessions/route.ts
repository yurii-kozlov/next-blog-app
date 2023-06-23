import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

export async function POST(req: NextRequest): Promise<NextResponse | Response> {
  const body = await req.json();
  const headersList = headers();
  const headerOrigin = headersList.get('origin');

  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: body.items ?? [],
        success_url: `${headerOrigin}/success?session_id=
        {CHECKOUT_SESSION_ID}`,
        cancel_url: `${headerOrigin}/products`
      })

      return NextResponse.json(session, { status: 200 })
    } catch (error) {
      return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      )

    }
  } else {
    return new Response('Method not allowed', {
      status: 405,
      headers: {
        'Allow': 'POST'
      }
    })
  }
}

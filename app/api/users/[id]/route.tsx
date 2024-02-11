import { NextRequest, NextResponse } from "next/server";
import schema from "../schema"

export function GET(
    request: NextRequest, 
    { params }: { params: {id: number}}) {
        if ( params.id > 10)
            return NextResponse.json({ error: 'User Not Found!'}, { status: 404 })

        return NextResponse.json({ id: 1, name: 'mosh'})
}

// PUT for replacing object, PATCH for updating 1 or more properties
export async function PUT(
    request: NextRequest, 
    {params}: {params: {id: number}}) {
    // Validate the request body
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });

    if (params.id > 10)
        return NextResponse.json({ error: 'User Not Found!'}, { status: 404 });

    return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(
    request: NextRequest, 
    {params}: {params: {id: number}}
) {
    if (params.id > 10)
        return NextResponse.json({ error: 'User Not Found!'}, { status: 404 });

    return NextResponse.json({}) ;
}
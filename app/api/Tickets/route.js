import Ticket from "@/app/models/ticket";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
    try {
        const allData = Ticket.find();
        return NextResponse.json({data: allData}, {status: 201});
    } catch (error) {
        return NextResponse.json({status: 500}, {message: error});
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const ticketData = body.formData;
        const insertedData = await Ticket.create(ticketData);
        return request.json({ status: 201}, { insertedTicket: insertedData});
    } catch (error) {
        return NextResponse.json({ status: 500}, { message: error});
    }
}

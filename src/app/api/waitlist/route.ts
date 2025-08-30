import { NextRequest, NextResponse } from 'next/server'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.email || !data.name || !data.userType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Initialize Google Sheets
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, serviceAccountAuth)
    await doc.loadInfo()

    // Get the first sheet (or create one if it doesn't exist)
    let sheet = doc.sheetsByIndex[0]
    if (!sheet) {
      sheet = await doc.addSheet({ 
        title: 'Waitlist Submissions',
        headerValues: [
          'Timestamp',
          'Name',
          'Email', 
          'Company',
          'User Type',
          'Investment Interests',
          'Crypto Holdings',
          'Investment Range',
          'Timeline',
          'Hear About',
          'Additional Info',
          'IP Address',
          'User Agent'
        ]
      })
    }

    // Prepare the row data
    const timestamp = new Date().toISOString()
    const investmentInterests = Array.isArray(data.investmentInterests) 
      ? data.investmentInterests.join(', ') 
      : data.investmentInterests || ''

    // Get client info
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Add row to sheet
    await sheet.addRow({
      'Timestamp': timestamp,
      'Name': data.name || '',
      'Email': data.email || '',
      'Company': data.company || '',
      'User Type': data.userType || '',
      'Investment Interests': investmentInterests,
      'Crypto Holdings': data.cryptoHoldings || '',
      'Investment Range': data.investmentRange || '',
      'Timeline': data.timeline || '',
      'Hear About': data.hearAbout || '',
      'Additional Info': data.additionalInfo || '',
      'IP Address': ip,
      'User Agent': userAgent
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully added to waitlist' 
    })

  } catch (error) {
    console.error('Error adding to waitlist:', error)
    return NextResponse.json(
      { error: 'Failed to add to waitlist' },
      { status: 500 }
    )
  }
}

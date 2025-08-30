# Google Sheets Integration Setup

## 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "DvTae Waitlist"
4. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)
   - Example: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`

## 2. Set up Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

## 3. Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the details:
   - Name: `dvtae-sheets-service`
   - Description: `Service account for DvTae waitlist integration`
4. Click "Create and Continue"
5. Skip role assignment (click "Continue")
6. Click "Done"

## 4. Generate Service Account Key

1. Click on the created service account
2. Go to "Keys" tab
3. Click "Add Key" > "Create New Key"
4. Select "JSON" format
5. Download the key file

## 5. Share Google Sheet with Service Account

1. Open your Google Sheet
2. Click "Share" button
3. Add the service account email (from the JSON file: `client_email`)
4. Give "Editor" permissions
5. Uncheck "Notify people"
6. Click "Share"

## 6. Set Environment Variables

Create a `.env.local` file in your project root with:

```env
GOOGLE_SHEET_ID=your_sheet_id_from_step_1
GOOGLE_SERVICE_ACCOUNT_EMAIL=service_account_email_from_json
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key from JSON (replace \\n with actual newlines)\n-----END PRIVATE KEY-----"
```

## 7. Test the Integration

1. Start your development server: `npm run dev`
2. Go to `/waitlist` page
3. Fill out and submit the form
4. Check your Google Sheet for the new row

## Sheet Headers

The integration will automatically create these columns:
- Timestamp
- Name
- Email
- Company
- User Type
- Investment Interests
- Crypto Holdings
- Investment Range
- Timeline
- Hear About
- Additional Info
- IP Address
- User Agent

## Troubleshooting

- **403 Error**: Check that the service account email has access to the sheet
- **404 Error**: Verify the GOOGLE_SHEET_ID is correct
- **Auth Error**: Ensure the private key is properly formatted with actual newlines
- **Missing Data**: Check that all required environment variables are set

## Security Notes

- Never commit your `.env.local` file to version control
- The service account only has access to sheets you explicitly share with it
- Consider rotating service account keys periodically
- Monitor API usage in Google Cloud Console

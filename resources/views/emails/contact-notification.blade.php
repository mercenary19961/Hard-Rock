<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #704399 0%, #c93727 100%);
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 8px 8px;
        }
        .field {
            margin-bottom: 20px;
        }
        .field-label {
            font-weight: bold;
            color: #704399;
            margin-bottom: 5px;
        }
        .field-value {
            background: white;
            padding: 10px;
            border-radius: 4px;
            border-left: 3px solid #704399;
        }
        .services-list {
            list-style: none;
            padding: 0;
        }
        .services-list li {
            background: white;
            padding: 8px 12px;
            margin: 5px 0;
            border-radius: 4px;
            border-left: 3px solid #c93727;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 2px solid #ddd;
            color: #666;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🚀 New Contact Form Submission</h1>
        <p>HardRock Agency</p>
    </div>

    <div class="content">
        <div class="field">
            <div class="field-label">Personal Name:</div>
            <div class="field-value">{{ $contact->personal_name }}</div>
        </div>

        @if($contact->company_name)
        <div class="field">
            <div class="field-label">Company Name:</div>
            <div class="field-value">{{ $contact->company_name }}</div>
        </div>
        @endif

        <div class="field">
            <div class="field-label">Phone Number:</div>
            <div class="field-value">
                <a href="tel:{{ $contact->phone_number }}">{{ $contact->phone_number }}</a>
            </div>
        </div>

        <div class="field">
            <div class="field-label">Email:</div>
            <div class="field-value">
                <a href="mailto:{{ $contact->email }}">{{ $contact->email }}</a>
            </div>
        </div>

        @if($contact->services && count($contact->services) > 0)
        <div class="field">
            <div class="field-label">Services Interested In:</div>
            <ul class="services-list">
                @foreach($contact->services as $service)
                    <li>{{ $service }}</li>
                @endforeach
            </ul>
        </div>
        @endif

        @if($contact->more_details)
        <div class="field">
            <div class="field-label">Additional Details:</div>
            <div class="field-value">{{ $contact->more_details }}</div>
        </div>
        @endif

        <div class="field">
            <div class="field-label">Submitted At:</div>
            <div class="field-value">{{ $contact->created_at->format('F d, Y - h:i A') }}</div>
        </div>
    </div>

    <div class="footer">
        <p>This email was sent from the contact form on hardrock-co.com</p>
        <p>&copy; {{ date('Y') }} HardRock Agency. All rights reserved.</p>
    </div>
</body>
</html>

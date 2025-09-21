# Google Maps API Setup Guide for LINE-UP Website

## Step 1: Get Google Maps API Key

### 1.1 Go to Google Cloud Console
1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account

### 1.2 Create or Select a Project
1. Click on the project dropdown at the top
2. Click "New Project" or select an existing project
3. Give your project a name (e.g., "LINE-UP Website")
4. Click "Create"

### 1.3 Enable Maps JavaScript API
1. In the left sidebar, go to "APIs & Services" > "Library"
2. Search for "Maps JavaScript API"
3. Click on it and press "ENABLE"

### 1.4 Create API Key
1. Go to "APIs & Services" > "Credentials"
2. Click "CREATE CREDENTIALS" > "API key"
3. Copy the API key that appears
4. Click "RESTRICT KEY" for security

### 1.5 Restrict Your API Key (Important for Security!)
1. Under "Application restrictions":
   - Select "HTTP referrers (web sites)"
   - Add your website domains:
     - `localhost:*` (for local testing)
     - `127.0.0.1:*` (for local testing)
     - `yourdomainname.com/*` (your actual website)
     - `www.yourdomainname.com/*` (www version)

2. Under "API restrictions":
   - Select "Restrict key"
   - Choose "Maps JavaScript API"

3. Click "Save"

## Step 2: Update Your Website Code

### 2.1 Add API Key to HTML
In your `index.html` file, find this line (around line 154):
```html
<!-- <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly" async defer></script> -->
```

Replace `YOUR_API_KEY` with your actual API key and uncomment the line:
```html
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBdVl-cTICSwYKrFt07-******&callback=initMap&libraries=&v=weekly" async defer></script>
```

### 2.2 Update Location Coordinates
In your `script.js` file, find this line (around line 232):
```javascript
const barbershopLocation = { lat: 32.0853, lng: 34.7818 };
```

Replace with your actual barbershop coordinates:
```javascript
const barbershopLocation = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE };
```

### 2.3 Update Address Information
In your `script.js` file, find the info window content (around line 251):
```javascript
content: `
    <div style="padding: 10px; text-align: right; direction: rtl;">
        <h3 style="margin: 0 0 10px 0; color: #000;">LINE-UP Barber Shop</h3>
        <p style="margin: 0; color: #666;">מספרת פרימיום לגברים</p>
        <p style="margin: 5px 0 0 0; color: #666;">רחוב הדוגמה 123, תל אביב</p>
    </div>
`
```

Replace with your actual address.

## Step 3: Find Your Location Coordinates

### Option 1: Google Maps
1. Go to [Google Maps](https://maps.google.com)
2. Search for your barbershop address
3. Right-click on the exact location
4. Click "What's here?"
5. The coordinates will appear at the bottom

### Option 2: GPS Coordinates Website
1. Visit [GPS Coordinates](https://www.gps-coordinates.net/)
2. Enter your address
3. Copy the decimal coordinates

### Option 3: Phone GPS
1. Stand at your barbershop location
2. Open Google Maps on your phone
3. Long-press on your current location
4. The coordinates will appear

## Step 4: Update Contact Information

In your `index.html` file (around line 136), update:
```html
<div class="contact-item">
    <h3>כתובת</h3>
    <p>YOUR_ACTUAL_ADDRESS_HERE</p>
</div>
```

## Step 5: Test the Integration

### Local Testing
1. Open your website in a browser
2. Scroll to the contact section
3. The map should load and show your location
4. Click on the marker to see the info window

### Troubleshooting
- **Map doesn't load**: Check browser console for errors
- **"This page can't load Google Maps correctly"**: API key issue
- **Gray map**: Check API restrictions and billing
- **Wrong location**: Verify coordinates

## Step 6: Billing Setup (Important!)

Google Maps requires billing to be enabled:

1. In Google Cloud Console, go to "Billing"
2. Link a billing account (you get $200 free credit monthly)
3. For most small websites, you won't exceed the free quota

### Free Usage Limits:
- 28,000 map loads per month (free)
- Most small business websites stay within this limit

## Example Configuration

Here's what your final script tag should look like:
```html
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBdVl-cTICSwYKrFt07-Tw3gX7WzXVBGFM&callback=initMap&libraries=&v=weekly" async defer></script>
```

And your coordinates:
```javascript
// Example for Tel Aviv location
const barbershopLocation = { lat: 32.0853, lng: 34.7818 };
```

## Security Notes

- Never expose your API key in public repositories
- Always restrict your API key to specific domains
- Monitor your API usage in Google Cloud Console
- Set up billing alerts if needed

## Common Issues

1. **API Key Error**: Make sure billing is enabled
2. **Domain Restrictions**: Add your domain to allowed referrers
3. **Coordinates Wrong**: Double-check lat/lng values
4. **Map Not Loading**: Check browser console for errors

Your map will be fully functional once these steps are completed!
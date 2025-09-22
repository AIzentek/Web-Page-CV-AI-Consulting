# 📧 Formspree Setup Instructions for Contact Form

Your CV website now has a professional contact form that needs to be connected to a Formspree account to send emails to your inbox.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Formspree Account
1. Go to [Formspree.io](https://formspree.io/)
2. Click **"Sign Up"** (it's free for up to 50 submissions/month)
3. Sign up with your email: `sergiomartinezramirez11@gmail.com`
4. Verify your email address

### Step 2: Create Your Form Endpoint
1. After logging in, click **"+ New Form"**
2. Enter form name: `Sergio Martinez CV Contact Form`
3. Copy the form endpoint URL (looks like: `https://formspree.io/f/xldedpqk`)

### Step 3: Update Your Website
1. Open your repository: https://github.com/AIzentek/Web-Page-CV-AI-Consulting
2. Click on `index.html` file
3. Click the pencil icon (Edit) 
4. Find this line (around line 297):
   ```html
   <form id="contactForm" action="https://formspree.io/f/xldedpqk" method="POST">
   ```
5. Replace `https://formspree.io/f/xldedpqk` with your actual Formspree endpoint
6. Scroll down and click **"Commit changes"**

### Step 4: Test Your Form
1. Wait 2-3 minutes for GitHub Pages to update
2. Visit your website: https://aizentek.github.io/Web-Page-CV-AI-Consulting
3. Click any "Contact" button
4. Fill out and submit the form
5. Check your email inbox for the submission

## 📧 What Happens When Someone Submits the Form

✅ **You'll receive an email with:**
- Subject: "New AI CONSULTING Inquiry from [Name] ([Company])"
- All form data organized professionally
- Reply-to address set to the sender's email
- Form context (which button they clicked)

✅ **The visitor will see:**
- Professional success message
- Confirmation that you'll respond within 24 hours
- Option to close the modal and continue browsing

## 🎯 Form Features Already Implemented

### Required Fields:
- ✅ First Name
- ✅ Last Name  
- ✅ Email Address
- ✅ Message

### Optional Fields:
- ✅ Company
- ✅ Position
- ✅ Phone Number
- ✅ Type of Inquiry dropdown

### Smart Features:
- ✅ Real-time validation (email format, phone format, required fields)
- ✅ Context-aware content (different messages based on which button clicked)
- ✅ Professional email formatting with custom subject lines
- ✅ Mobile responsive design
- ✅ Loading states and success confirmations
- ✅ Spam protection built into Formspree

## 🛡️ Spam Protection

Formspree automatically provides:
- ✅ reCAPTCHA integration
- ✅ Honeypot fields
- ✅ Rate limiting
- ✅ Email verification

## 📊 Analytics & Tracking

The form includes:
- ✅ Submission tracking via console logs
- ✅ Google Analytics event tracking (if you add GA)
- ✅ Success/error rate monitoring

## 🔧 Advanced Configuration (Optional)

### Custom Thank You Page:
The form is configured to redirect to:
`https://aizentek.github.io/Web-Page-CV-AI-Consulting?success=true`

### Email Templates:
Formspree allows you to customize the email templates in your dashboard.

### Integrations:
You can connect Formspree to:
- Slack notifications
- Google Sheets
- Zapier workflows
- CRM systems

## 🚨 Important Notes

1. **Free Plan Limits**: 50 submissions/month (upgrade to Pro for unlimited)
2. **Email Delivery**: Formspree uses reliable infrastructure for delivery
3. **GDPR Compliant**: Formspree handles data protection requirements
4. **Backup**: Keep the current endpoint (`xldedpqk`) as backup during setup

## 🎯 Testing Checklist

After setup, test these scenarios:
- [ ] Submit form with valid data
- [ ] Try submitting with invalid email
- [ ] Test mobile responsiveness
- [ ] Verify email arrives in your inbox
- [ ] Check email formatting and reply-to address
- [ ] Test different inquiry types from different CTA buttons

## 💡 Pro Tips

1. **Response Time**: Set up email notifications on your phone for instant responses
2. **Auto-Response**: Configure Formspree to send automatic confirmation emails
3. **Organization**: Create email filters to organize inquiries by type
4. **Follow-up**: Set up templates for common responses in your email client

---

**Need Help?** If you encounter any issues during setup, the current form will fallback to a basic contact method, so your website remains functional.

**Formspree Documentation**: https://help.formspree.io/
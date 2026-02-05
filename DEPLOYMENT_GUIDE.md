# HackEcho Deployment Guide 🚀

Complete guide to deploy HackEcho to production.

## Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account (or MongoDB server)
- Google Cloud Console account (for OAuth)
- GitHub account (for OAuth)
- Google AI Studio account (for Gemini API)
- Vercel account (recommended) or any Node.js hosting

---

## 1. Environment Setup

### MongoDB Atlas Setup
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier works)
3. Create a database user with password
4. Whitelist all IPs (0.0.0.0/0) or specific IPs
5. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/`

### Google Gemini API
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key (starts with `AIzaSy...`)

### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable **Google+ API**
4. Go to **Credentials** → **Create Credentials** → **OAuth client ID**
5. Application type: **Web application**
6. Add Authorized redirect URIs:
   - Development: `http://localhost:3000/api/auth/oauth/google/callback`
   - Production: `https://yourdomain.com/api/auth/oauth/google/callback`
7. Copy **Client ID** and **Client Secret**

### GitHub OAuth Setup
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click **New OAuth App**
3. Fill in details:
   - Application name: `HackEcho`
   - Homepage URL: `https://yourdomain.com`
   - Authorization callback URL:
     - Development: `http://localhost:3000/api/auth/oauth/github/callback`
     - Production: `https://yourdomain.com/api/auth/oauth/github/callback`
4. Copy **Client ID** and **Client Secret**

---

## 2. Local Development

### Clone and Install
```bash
git clone https://github.com/AnupSharma12/HackEcho.git
cd HackEcho
npm install
```

### Environment Variables
Create `.env.local` file:
```env
# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?appName=Cluster0

# JWT Secret (generate: openssl rand -base64 32)
JWT_SECRET=your_secure_random_string_here

# Google Gemini AI
GEMINI_API_KEY=AIzaSy...your_key_here

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-your-google-client-secret

# GitHub OAuth
GITHUB_CLIENT_ID=Ov23li...your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

### Run Development Server
```bash
npm run dev
```
Access at: `http://localhost:3000`

### Build for Production
```bash
npm run build
npm start
```

---

## 3. Deploy to Vercel (Recommended)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [Vercel](https://vercel.com)
2. Click **Import Project**
3. Select your GitHub repository
4. Configure:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Step 3: Add Environment Variables
In Vercel dashboard → Settings → Environment Variables, add:
```
MONGODB_URI
JWT_SECRET
GEMINI_API_KEY
NEXT_PUBLIC_BASE_URL (your Vercel domain)
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET
```

### Step 4: Update OAuth Redirect URLs
- **Google Cloud Console**: Add `https://your-vercel-domain.vercel.app/api/auth/oauth/google/callback`
- **GitHub OAuth App**: Add `https://your-vercel-domain.vercel.app/api/auth/oauth/github/callback`

### Step 5: Deploy
Click **Deploy** and wait for build to complete.

---

## 4. Deploy to Other Platforms

### Railway
1. Connect GitHub repo
2. Add environment variables
3. Deploy automatically

### DigitalOcean App Platform
1. Create new app from GitHub
2. Add environment variables
3. Deploy

### AWS/Azure/GCP
1. Use Docker or build pack
2. Configure environment variables
3. Set up load balancer and SSL

---

## 5. Post-Deployment Checklist

- [ ] Test user registration with email/password
- [ ] Test Google OAuth login
- [ ] Test GitHub OAuth login
- [ ] Test AI level generation on Dashboard
- [ ] Test answer submission and evaluation
- [ ] Verify profile page loads with user data
- [ ] Check badges and settings pages
- [ ] Test logout functionality
- [ ] Monitor MongoDB connection
- [ ] Check Gemini API usage and limits
- [ ] Set up error tracking (Sentry)
- [ ] Set up analytics (Google Analytics)
- [ ] Configure custom domain (optional)
- [ ] Enable SSL/HTTPS
- [ ] Set up CDN for static assets

---

## 6. Monitoring & Maintenance

### MongoDB Atlas
- Monitor database size and connections
- Set up alerts for high usage
- Review indexes for performance

### Gemini API
- Track API usage in Google AI Studio
- Set billing alerts
- Optimize prompts for cost efficiency

### Vercel/Hosting
- Monitor function execution time
- Check error logs regularly
- Set up uptime monitoring (e.g., UptimeRobot)

---

## 7. Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `JWT_SECRET` | Secret key for JWT signing | `random_secure_string` |
| `GEMINI_API_KEY` | Google Gemini API key | `AIzaSy...` |
| `NEXT_PUBLIC_BASE_URL` | Your app's base URL | `https://hackecho.com` |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | `123-abc.apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET` | Google OAuth secret | `GOCSPX-...` |
| `GITHUB_CLIENT_ID` | GitHub OAuth client ID | `Ov23li...` |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth secret | `ghp_...` |

---

## 8. Troubleshooting

### "Invalid redirect URI" error
- Ensure OAuth redirect URLs in Google/GitHub match your domain exactly
- Include `/api/auth/oauth/[provider]/callback` in the URL

### "MongoDB connection failed"
- Check if IP is whitelisted in MongoDB Atlas
- Verify connection string is correct
- Ensure database user has proper permissions

### "Gemini API error"
- Verify API key is correct
- Check API quotas and limits
- Ensure billing is enabled (if required)

### Profile picture not showing
- Check if OAuth profile returns picture/avatar_url
- Verify fallback avatar service (Dicebear) is accessible

---

## 9. Security Best Practices

- [ ] Use strong JWT_SECRET (min 32 characters)
- [ ] Enable CORS protection
- [ ] Set up rate limiting for API routes
- [ ] Use HTTPS only in production
- [ ] Rotate OAuth secrets regularly
- [ ] Keep dependencies updated
- [ ] Monitor for security vulnerabilities
- [ ] Implement CSP headers
- [ ] Enable HTTP-only cookies (already done)
- [ ] Sanitize user inputs

---

## 10. Performance Optimization

- [ ] Enable Next.js caching
- [ ] Use MongoDB connection pooling (already implemented)
- [ ] Optimize images with Next.js Image component
- [ ] Implement lazy loading for routes
- [ ] Cache AI-generated content (already implemented)
- [ ] Use CDN for static assets
- [ ] Enable compression
- [ ] Monitor Core Web Vitals

---

## Support

For issues or questions:
- GitHub Issues: [HackEcho Issues](https://github.com/AnupSharma12/HackEcho/issues)
- Email OAuth setup help: See [OAUTH_SETUP.md](OAUTH_SETUP.md)

---

## License

MIT License - See [LICENSE](LICENSE) for details.

# Environment Variables for Vercel Deployment

## Required Environment Variables

Add these to your Vercel project settings (Project Settings > Environment Variables):

### Database Configuration
- `DB_HOST` - Your database host (e.g., mysql.planetscale.com)
- `DB_USER` - Your database username
- `DB_PASSWORD` - Your database password
- `DB_NAME` - Your database name
- `DB_PORT` - Database port (usually 3306 for MySQL)

### Server Configuration
- `PORT` - Server port (Vercel will set this automatically)
- `NODE_ENV` - Set to "production"

## Database Options for Production

### 1. PlanetScale (MySQL) - Recommended
- Free tier available
- Serverless MySQL
- Easy to set up
- Compatible with your existing MySQL setup

### 2. Supabase (PostgreSQL)
- Free tier available
- Full-featured backend
- Real-time subscriptions

### 3. Railway
- Simple deployment
- Multiple database options
- Good for beginners

### 4. MongoDB Atlas
- If you want to switch to MongoDB
- Free tier available

## Setup Steps
1. Create account with chosen database provider
2. Create a new database
3. Get connection credentials
4. Add credentials to Vercel environment variables
5. Update your database connection code if needed

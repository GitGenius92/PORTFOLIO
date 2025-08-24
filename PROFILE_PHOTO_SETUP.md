# Profile Photo Setup Guide

## 📸 Adding Your Profile Photo

To add your profile photo to the portfolio, follow these steps:

### 1. Prepare Your Image
- Use the professional portrait you provided
- Recommended size: 800x800 pixels (minimum)
- Format: JPG or PNG
- File name: `profile-photo.jpg`

### 2. Place the Image
1. Save your profile photo as `profile-photo.jpg`
2. Place it in the `public` folder of your project
3. The path should be: `public/profile-photo.jpg`

### 3. Image Requirements
- **High quality**: Professional, clear image
- **Professional attire**: Business casual or formal wear
- **Good lighting**: Well-lit, clear facial features
- **Background**: Clean, professional background
- **Expression**: Confident, approachable smile

### 4. Current Implementation
Your profile photo is now configured to appear in:
- **Hero Section**: Large circular photo with glowing neon ring
- **About Section**: Medium-sized photo above your personal story

### 5. File Structure
```
Portfolio/
├── public/
│   └── profile-photo.jpg  ← Place your photo here
├── components/
│   └── sections/
│       ├── hero.tsx       ← Hero section photo
│       └── about.tsx      ← About section photo
└── ...
```

## 🎨 MF Logo

The MF logo has been created and is now used in:
- **Navbar**: Small logo next to your name
- **Footer**: Medium logo in the brand section

The logo features:
- Gradient background (blue → purple → cyan)
- Hover animations (scale and rotation)
- Responsive sizing (sm, md, lg)
- Modern, futuristic design

## 🚀 Next Steps

1. **Add your profile photo** to the `public` folder
2. **Restart the development server** if needed
3. **View your portfolio** at `http://localhost:3000`
4. **Customize other content** as needed

Your portfolio will now display your professional photo and MF logo throughout the website! 🎉

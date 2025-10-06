# Speaker Photos Guide

## How to Add Local Photos for Speakers

### Method 1: Using the External Data File (Recommended)

1. **Edit the speaker data file**: `frontend/src/data/speakers.js`
2. **Add your photos**: Place speaker photos in `frontend/public/speakers/` folder
3. **Update photo paths**: Change the `speaker_photo` field to use local paths

### Step-by-Step Instructions

#### 1. Create the speakers folder
```bash
mkdir frontend/public/speakers
```

#### 2. Add your photos
Place speaker photos in the `frontend/public/speakers/` folder with these exact filenames:
- `pratima-murthy.jpg`
- `animesh-mukherjee.jpg`
- `abhisek-dash.jpg`
- `monojit-choudhury.jpg`
- `sunayana-sitaram.jpg`
- `prabha-chandra.jpg`
- `sachin-baliga.jpg`
- `sanjeev-jain.jpg`
- `somnath-banerjee.jpg`
- `rima-hazra.jpg`
- `aseem-srivastava.jpg`
- `vamshi-bonagiri.jpg`
- `bobby-kunhu.jpg`

#### 3. Update the data file
In `frontend/src/data/speakers.js`, the photos are already configured to use local paths:
```javascript
speaker_photo: "/speakers/pratima-murthy.jpg", // Local photo path
```

#### 4. Photo Specifications
- **Format**: JPG or PNG
- **Size**: 400x400 pixels (square)
- **Quality**: High resolution for crisp display
- **File size**: Under 500KB for fast loading

### Method 2: Direct Modification in Component

If you prefer to modify the component directly:

1. **Edit**: `frontend/src/pages/Announcements.jsx`
2. **Find the speakers array** (lines 8-9)
3. **Update photo paths** to use local files:
   ```javascript
   speaker_photo: "/speakers/your-photo-name.jpg"
   ```

### Example: Adding a New Speaker

To add a new speaker:

1. **Add photo**: `frontend/public/speakers/new-speaker.jpg`
2. **Update data file**: Add new speaker object to `speakersData` array in `frontend/src/data/speakers.js`:
   ```javascript
   {
     speaker: "Dr New Speaker",
     speaker_title: "Research Director",
     speaker_affiliation: "University Name",
     speaker_bio: "Brief biography...",
     speaker_photo: "/speakers/new-speaker.jpg",
     speaker_google_scholar: "https://scholar.google.com/...",
     speaker_linkedin: "https://linkedin.com/in/...",
     speaker_website: "https://website.com"
   }
   ```

### File Structure
```
conference-website/
├── frontend/
│   ├── public/
│   │   └── speakers/          # Put photos here
│   │       ├── pratima-murthy.jpg
│   │       ├── animesh-mukherjee.jpg
│   │       └── ...
│   └── src/
│       ├── data/
│       │   └── speakers.js    # Edit speaker data here
│       └── pages/
│           └── Announcements.jsx
```

### Troubleshooting

**Photos not showing?**
- Check file paths start with `/speakers/`
- Ensure photos are in `frontend/public/speakers/` folder
- Verify filenames match exactly (case-sensitive)
- Check browser console for 404 errors

**Want to use online photos?**
- Replace local paths with full URLs:
  ```javascript
  speaker_photo: "https://example.com/photo.jpg"
  ```

### Benefits of This Approach

✅ **No database changes needed**  
✅ **Easy to add/remove speakers**  
✅ **Fast loading (no API calls)**  
✅ **Version control friendly**  
✅ **Works offline**  
✅ **Easy to backup and deploy**  

The speakers will display immediately without any backend changes!

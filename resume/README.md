# Resume Folder

## How to Add Your PDF Resume

1. **Create your resume PDF** using any tool (MS Word, Google Docs, Canva, etc.)

2. **Save it as PDF** with the name: `Rambabu_Resume.pdf`

3. **Place the PDF file in this folder** (`public/resume/`)

4. The download button on the Resume page will automatically work!

## Alternative: Use Print-to-PDF

If you don't have a PDF file, you can use the browser's print-to-PDF feature instead:

1. Open `src/pages/Resume.jsx`
2. In the `handleDownload` function, comment out the download code
3. Uncomment the `window.print()` line
4. Users can then use the browser's print dialog to save as PDF

## File Structure
```
public/
└── resume/
    ├── README.md (this file)
    └── Rambabu_Resume.pdf (your PDF resume - add this file)
```

## Notes
- The PDF file should be named exactly: `Rambabu_Resume.pdf`
- Maximum recommended file size: 2-5 MB
- Make sure the PDF is optimized for web viewing

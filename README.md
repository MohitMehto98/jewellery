Assignment for Frontend Developer (Assistant Manager, M1)

Objective:
Evaluate the candidate's expertise in React.js/Next.js, their ability to integrate APIs, ensure SEO best practices, and their knowledge of creating high-performance web pages with optimized Lighthouse scores.

Assignment Overview
Title: Build a Jewelry Product Detail Page with Variations
Duration: 6-8 hours
Deliverables:
Functional Product Detail Page.
Codebase with instructions (README.md).
Deployed live demo (optional).
A summary document on how variations and SEO optimizations were implemented.

Assignment Details
Task: Create a Jewelry Product Detail Page
The product detail page should display information about a single product, allowing users to interact with various attributes (e.g., gemstones, metal types, carat weights, and ring sizes). The page must dynamically update based on user selections.

Page Requirements
1. Layout
Replicate the following features:
Product Image Section:
The main image display has a carousel of thumbnails.
Dynamically update the main image when users select thumbnails or variations.
Include zoom-in functionality for the main image.
Product Info Section:
Title, price, exclusive offers, and customer reviews.
Dynamic price updates based on user selections.
Customization Options:
Allow the user to select:
Gemstone type (e.g., Aquamarine, Sapphire, Diamond).
Gemstone quality (e.g., Good, Better, Best, Heirloom).
Metal type (e.g., White Gold, Yellow Gold, Rose Gold).
Carat weight.
Ring size (with a "Size Guide" link).
Based on selected attributes, update the displayed product details (e.g., price, description, and images).
Price Breakdown Section:
Display a table showing:
Component (e.g., metal, gemstones, making charges).
Weight, Rate, and Value.
Dynamically calculate the Grand Total as variations change.
Related Products Section:
Carousel of similar products (e.g., "You May Also Like").
Include a thumbnail, name, and price range for each product.

2. Functionality
Dynamic Variation Handling:
Fetch product data from a mock API and update details based on the selected attributes.
Ensure options like out-of-stock items are disabled.
Provide clear error messages for invalid actions (e.g., selecting unavailable sizes).
Add to Bag Button:
Ensure the button reflects the selected variation and is disabled if the selection is invalid.

3. SEO Optimization
Add meta tags (title, description, keywords) for SEO.
Include structured data (JSON-LD) for product schema:
@type: "Product"
Attributes: Name, Description, SKU, Image URLs, Price, Availability, Brand.
Ensure Lighthouse SEO score is 100:
Use alt attributes for all images.
Optimize page performance (e.g., lazy-loading images).

4. Dummy Data
Use the following JSON data for the mock API:
{
  "id": "SR0160AQ",
  "title": "Classic Aquamarine and Diamond Three Stone Engagement Ring",
  "base_price": 237589,
  "exclusive_offer": "Get 20% off on making charges",
  "reviews": 7,
  "images": [
    "https://via.placeholder.com/500x500?text=Main+Image",
    "https://via.placeholder.com/100x100?text=Thumbnail1",
    "https://via.placeholder.com/100x100?text=Thumbnail2",
    "https://via.placeholder.com/100x100?text=Thumbnail3"
  ],
  "variations": {
    "gemstone": ["Aquamarine", "Diamond", "Sapphire"],
    "quality": ["Good", "Better", "Best", "Heirloom"],
    "metal": ["White Gold", "Yellow Gold", "Rose Gold"],
    "carat_weight": [1.5, 1.8, 2.0],
    "ring_size": [6, 7, 8, 9, 10]
  },
  "price_breakdown": {
    "metal": { "rate": 4567, "weight": 3.87, "value": 18528 },
    "stones": [
      { "type": "Aquamarine", "carat": 1.12, "value": 62748 },
      { "type": "Diamond", "carat": 0.46, "value": 143175 }
    ],
    "making_charges": 6218,
    "subtotal": 230669,
    "gst": 6920,
    "grand_total": 237589
  }
}


Evaluation Criteria
Functionality:
Correctly implements dynamic updates for variations.
Accurate price calculations for selected variations.
Functional and responsive design for desktop and mobile.
Code Quality:
Modular and reusable components.
Proper state management (e.g., React useState, useReducer, or Context API).
SEO Optimization:
Proper meta tags, structured data, and accessibility.
Lighthouse SEO score of 100.
Documentation:
Clear setup and execution steps in README.md.
Explanation of how SEO and performance goals were achieved.

Bonus Features (Optional)
Add an image zoom-in feature on hover.
Include a feature to toggle currency (e.g., INR/USD).
Implement pagination or filtering in the "You May Also Like" section.



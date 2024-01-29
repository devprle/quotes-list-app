# Quotes List App
**Author**: Aleksandar Prlinčević
**Description**: Test Project for FAZI Company
## Project Structure
The project root contains two folders representing two different mini apps:

**1. quotes-express**
* Node.js Express code representing the server.
* Provides API endpoints for specific functions.

**2. quotes-react**
* Frontend React solution for the provided test tasks.
* Built with Vite + React and includes additional libraries (refer to package.json).
* Styling uses mainly Tailwind, and Font Awesome 6 is used for icons.
* Custom styles are written in SCSS.
## How to Run the Project
### 1.Run the Express Server:

* Open a terminal.
* Navigate to the quotes-express folder.
* Install dependencies and run the **"dev"** script:
```
npm install
npm run dev
```
This will start the backend, listening on port 3000.
### 2.Run the React Frontend:

* Navigate back to the root and then to the quotes-react folder.
* Install dependencies and run the **"dev"** script:
```
npm install
npm run dev
```
This will launch the frontend application, likely on port 5173 or 5174. Visit the provided local address to observe the result.
## Application Features
### Quotes List
-   Vertical list of quotes fetched from the server.
-   Each quote includes content, author, upvote/downvote count, and the percentage of upvotes.
### Quotes Voting

-   Users can upvote, downvote, or delete their vote (only once).
-   Voting actions are handled through API calls. Deleting an existing vote is required before changing it.

### Quotes Filtering by Tags
-   Tags filtering presented by a scrollable group of tag checkboxes.
-   Checking or unchecking a checkbox automatically updates the quotes list with a new API call.
### Quotes Sorting
-   Quotes can be sorted by creation time, author, or upvote count.
-   Sorting type direction (ascending/descending) controlled by two select elements.
-   Any change in these elements updates the quotes list automatically.
### Pagination
-   Pagination element at the bottom dynamically calculates the number of pages based on the total number of quotes.
-   Page size is hardcoded to 5.
-   Users can navigate to specific pages or move to the next/previous page by clicking the arrows.
### Adding New Quote
-   Users can add a new quote by clicking the "Add New Quote" button.
-   Populate the fields in the opened modal and click "Save."
-   Requires content, author, and tags inputs.
-   Quote saving is handled by the API.
## Contact
For any questions or issues, feel free to contact the author:
-   Name: Aleksandar Prlinčević
-   Email: prlincevicdev@gmail.com
## Conclusion
I want to express my heartfelt gratitude to FAZI company for giving me the incredible opportunity to work on this test project.

I look forward to the possibility of further collaboration and am eager to contribute my skills and passion to future projects. Thank you once again for this opportunity, and I hope to have the chance to discuss more with the team soon.

Best regards,
Aleksandar 👨🏻‍💻

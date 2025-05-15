# oneClick.Donate

## Project Overview

[Provide a concise description of your donation web application. What problem does it solve? Who is it for? What are its key features beyond authentication?]

This project integrates Civic Auth to provide a simple and secure authentication experience for users, leveraging embedded wallets to potentially streamline cryptocurrency donations.

## Civic Auth Integration

This application utilizes the `@civic/auth-web3` SDK to implement user authentication with Civic Auth, including the creation and management of embedded wallets.

### Key Features Enabled by Civic Auth:

* **Familiar Sign-in Options:** Users can log in using familiar methods provided by Civic Auth.
* **Embedded Wallets:** Upon successful authentication, users are provided with an embedded wallet, potentially enabling seamless interaction with blockchain-based features (e.g., cryptocurrency donations).
* **Simplified Blockchain Interaction:** Civic Auth abstracts away much of the underlying blockchain complexity, making it easier for users (and developers) to benefit from blockchain technology.

### Demonstration Video

[Provide a link to your 1-minute demo video here. In the video, make sure to clearly showcase:]

* The user authentication flow using Civic Auth.
* The creation of an embedded wallet for a new user.
* How the embedded wallet is used (e.g., initiating a donation transaction, if implemented).
* A brief explanation of how Civic Auth is integrated into the application.

## Setup and Installation

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/9ightshade/oneClick.Donate.git]
    cd [oneClick.Donate]
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root of your project and add your Civic Auth credentials:
    ```
    CIVIC_CLIENT_ID=civic_client_id
    # Add any other environment variables application needs
    ```
    **Important:** Obtain these credentials from your [Civic Auth Dashboard]([insert civic auth dashboard link here if you have it handy]).

4.  **Run the Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
    application should now be running at `http://localhost:3000` (or a similar address).

## Civic Auth Integration Steps

This section outlines the key steps taken to integrate Civic Auth into this application. For detailed implementation, please refer to the source code, particularly in the `pages/api/auth/[...civicauth].ts` (if using the `pages` directory) or `src/app/api/auth/[...civicauth]/route.ts` (if using the `app` directory) and the frontend authentication components.

1.  **Installation of `@civic/auth-web3` SDK:**
    ```bash
    npm install @civic/auth-web3
    ```

2.  **API Route Setup (Next.js):**
    A dynamic API route `api/auth/[...civicauth]` was created to handle Civic Auth's backend interactions. This route utilizes the `CivicAuthNextApi` class from the `@civic/auth-web3/next` module to manage the authentication flow.
    ```typescript
    // Example for src/app/api/auth/[...civicauth]/route.ts
    import { handler } from "@civic/auth-web3/nextjs"

    export const GET = handler()
    ```

3.  **Frontend Authentication Flow:**
    * A "Login with Civic" button (or similar UI element) triggers the initiation of the Civic Auth flow.
    * The frontend uses the `@civic/auth-web3` SDK (likely a React hook or utility function) to generate an authorization URI.
    * The user is redirected to the Civic Auth authorization server.
    * After successful authentication, the user is redirected back to a callback URL in the application.
    * The frontend then interacts with the `/api/auth/[...civicauth]` route to process the authorization code and retrieve user information and the embedded wallet details.

4.  **Embedded Wallet Implementation:**
    * Upon the user's first successful authentication, Civic Auth automatically creates an embedded wallet for them.
    * The `@civic/auth-web3` SDK provides access to this embedded wallet object (e.g., a `Web3Provider` or similar).
    * [Explain how you are using the embedded wallet in your application. For example:] This embedded wallet is intended to be used for making cryptocurrency donations directly within the application, simplifying the donation process for users who may not have existing crypto wallets. [If you have a specific implementation of a donation function using the wallet, briefly describe it.]

## Further Development

[Optional: Briefly mention any planned future features or improvements related to Civic Auth or the donation functionality.]

## Contributing

[Optional: If you're open to contributions, explain how others can contribute to your project.]

## License

[Optional: Include a license for your project.]

## Acknowledgements

[Optional: Mention any libraries, frameworks, or resources you found particularly helpful.]

---

**Remember to replace the bracketed placeholders with your specific project details and code snippets.** This README provides a good starting point for documenting your Civic Auth integration and embedded wallet usage for the hackathon. Good luck with your submission!
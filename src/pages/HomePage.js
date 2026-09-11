import {Link} from "react-router-dom";

export default function HomePage(){
    
    return <><section className="hero">
        <p className="eyebrow">YOUR FINANCIAL FUTURE</p>
        <h1>Welcome to Mbhombi</h1>
        
        <p>Simple, secure banking built around you and your community.</p>
        <Link className="cta" to="/bank/create">Create a bank account</Link>
        </section><section className="two-col"><article className="card">
            <h2>Our vision</h2><p>To make reliable financial services accessible, understandable and useful to every customer.</p>
            </article>
            <article className="card">
                <h2>Our mission</h2>
                <p>To provide secure digital banking tools that help individuals and communities build financial confidence.</p>
                </article>
                </section>
                <section className="card">
                    <h2>How to create a bank account</h2>
                    <ol className="steps">
                        <li>Open the account creation page.</li>
                        <li>Enter the account holder, customer, phone and account type details.</li>
                        <li>Choose a private PIN and enter an initial deposit of at least R50.</li>
                        <li>Review the details and submit them securely.</li>
                    </ol>
                    <Link className="text-link" to="/bank/create">Go to account creation →</Link>
                </section>
            </>
            }

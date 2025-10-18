## 1. Defining XSS and Mechanism 💻

**Cross-Site Scripting (XSS)** (CWE-79) is a web security vulnerability that allows an attacker to compromise the interactions that users have with a vulnerable application.

|Aspect|Description|
|---|---|
|**Vulnerability**|Improper neutralization of user input during web page generation.|
|**Attacker's Goal**|To circumvent the **same-origin policy** of the victim's browser.|
|**Mechanism**|Attackers inject malicious **JavaScript** or other executable content (HTML tags, attributes, Flash, etc.) into a vulnerable web page.|
|**Execution**|The victim's browser executes the malicious script because it appears to come from the web server's trusted domain.|

**XSS Vulnerabilities occur when:**

1. Untrusted data (typically from a web request) enters a web application.
    
2. The application dynamically generates a web page that includes this untrusted data.
    
3. The application fails to prevent the data from containing content that is executable by a web browser (e.g., JavaScript).
    
4. A victim visits the page, and the browser executes the malicious script in the context of the web server's domain.
    

---

## 2. Types of XSS Attacks

XSS attacks are primarily categorized by how the malicious payload is delivered to the victim.

### A. Reflected XSS (Non-Persistent / Type 1)

- **Mechanism:** Malicious scripts are injected into a website's response to a user's request.
    
- **Injection:** Happens through manipulated parameters in URLs, forms, or other client-side requests.
    
- **Persistence:** It is **non-persistent**; the malicious payload is not stored on the server.
    
- **Impact:** Affects users only through specific, crafted requests (e.g., a malicious link sent via email).
    

### B. Stored XSS (Persistent / Type 2)

- **Mechanism:** Malicious scripts are **stored on the server** (or database).
    
- **Common Locations:** Databases, message forums, comment sections, or user profiles.
    
- **Persistence:** It is **persistent**; the payload remains until it is removed.
    
- **Impact:** Represents a significant threat because it **impacts multiple users** who simply view the compromised page, causing their browsers to execute the stored script.
    

### C. DOM-Based XSS (Type 0)

- **Mechanism:** This is a **client-side vulnerability**. The attack payload is executed due to modifications to the Document Object Model (DOM) environment in the user's browser.
    
- **Vulnerability:** JavaScript code processes untrusted data from sources like the URL and uses it to update the DOM without proper sanitization.
    
- **Server Involvement:** The malicious payload might not be sent to the server at all.
    

### D. Universal XSS (uXSS)

- **Mechanism:** Exploits flaws in the **web browser** or **browser extensions** themselves.
    
- **Impact:** Enables malicious script execution on **any website visited**, circumventing the security of individual web applications. It is a critical vulnerability due to its wide-ranging impact.
    

### E. Self-XSS

- **Mechanism:** Tricks users into **running malicious JavaScript in their browser's console**.
    
- **Delivery:** Attackers impersonate tech support or offer enticing "hacks," and code pasting is usually required.
    
- **Vulnerability:** **No direct website vulnerability is exploited**. The user is tricked into exploiting themselves.
    

---

## 3. Attack Consequences

A successful XSS attack can lead to severe consequences for the victim and the application:

- **Session Hijacking / Cookie Theft:** Stealing cookies to gain access to the user's account.
    
- **Data Theft:** Stealing sensitive data displayed on the page.
    
- **Account Takeover:** Performing unauthorized actions or completely taking over the user's account.
    
- **Defacement:** Webpage defacement.
    
- **Malware Delivery:** Redirection to other websites or turning the compromised site into a drive-by download site to facilitate malware distribution.
    
- **Phishing/Credential Theft:** Using iFrame overlays to facilitate phishing or credential theft.
    

---

## 4. Prevention Strategies 🛡️

The main goal of XSS prevention is to ensure that user input is never executed as code in a browser.

- **Contextual Output Encoding/Escaping:** The **most effective defense**. All untrusted data should be encoded/escaped before being output to the browser, based on where it will be placed in the HTML (e.g., HTML body, HTML attribute, JavaScript block, etc.).
    
- **Input Validation:** Check and validate that input matches expected patterns (e.g., whitelisting allowed characters).
    
- **Sanitization:** Use robust libraries to sanitize untrusted HTML input if the application must allow users to submit HTML (e.g., in a comment section).
    
- **Content Security Policy (CSP):** A browser-side security layer that prevents the browser from executing code from untrusted sources, greatly limiting the effect of XSS.
    
- **HTTPOnly Cookies:** Set cookies to `HTTPOnly` to prevent malicious client-side JavaScript from accessing them, mitigating the risk of cookie theft.

export interface Note {
  id: string;
  title: string;
  snippet: string;
  content: string;
  // Optional relative markdown file in src/content/
  file?: string;
  imageId: string;
}

export const notes: Note[] = [
  {
    id: '1',
    title: 'Burp Suite: Your Web Security Toolkit',
    snippet: 'Overview of Burp Suite components and practice resources (Proxy, Repeater, Intruder, Scanner, Sequencer).',
    content: `Burp Suite is an integrated platform for web security testing. It is used by security professionals and bug bounty hunters to identify vulnerabilities in web applications. It acts as a powerful magnifying glass and toolkit for analyzing web traffic.

Core Components:
- Proxy: Intercepts and modifies web traffic between the browser and the web server.
- Repeater: Manipulates and re-sends individual HTTP requests repeatedly to test server responses.
- Intruder: Automates custom attacks against an application, typically used for brute-forcing, fuzzing, or data extraction.
- Scanner: Automatically finds common security flaws in web applications.
- Sequencer: Analyzes the randomness and quality of session tokens and other security-critical data items.

Practice Resources:
- Burp Suite Documentation
- Web Security Academy (PortSwigger)
- Damn Vulnerable Web Application (DVWA)
- TryHackMe labs`,
    imageId: 'burp-suite',
    file: 'burp-suite.md',
  },
  {
    id: '2',
    title: 'Cloud and Virtualization Fundamentals',
    snippet: 'Hypervisors, cloud storage types, deployment models (public/private/community/hybrid), and CASB functions.',
    content: `A hypervisor is a specialized software layer that creates and runs virtual machines (VMs). It separates the operating system and applications from the underlying physical hardware.

Type 1 (Bare-metal) Hypervisor:
- Installed directly on hardware; high performance; used in enterprise data centers.

Type 2 (Hosted) Hypervisor:
- Runs on a host OS; simpler to install; used for desktop/dev environments but with overhead.

Cloud Storage Varieties:
- Raw storage: block/object storage used for backups and application data.
- File synchronization: services like Dropbox/Google Drive.
- CDN: caches content geographically to reduce latency.

Cloud Deployment Models:
 Public cloud (multitenancy)
 Private cloud (single tenancy)
 Community cloud
 Hybrid cloud (combination)

CASB (Cloud Access Security Broker):
- Acts as a policy enforcement point between cloud consumers and providers, enabling visibility, SSO integration, data protection, and policy enforcement.
`,
    imageId: 'cloud-virtualization',
    file: 'cloud-virtualization.md',
  },
  {
    id: '3',
    title: 'Cross-Site Scripting (XSS)',
    snippet: 'Definition, attack types (Reflected, Stored, DOM), consequences, and prevention strategies.',
    content: `Cross-Site Scripting (XSS) (CWE-79) is a web security vulnerability that allows an attacker to compromise the interactions that users have with a vulnerable application.

Types:
- Reflected XSS: payload is reflected in a response (non-persistent).
- Stored XSS: payload is stored on the server (persistent).
- DOM-based XSS: client-side modification leads to execution without server involvement.

Consequences include session hijacking, data theft, account takeover, defacement, malware delivery, and phishing.

Prevention strategies:
- Contextual output encoding/escaping
- Input validation (whitelisting)
- Sanitization libraries for HTML input
- Content Security Policy (CSP)
- HTTPOnly cookies
`,
    imageId: 'xss',
    file: 'xss.md',
  },
  {
    id: '4',
    title: 'Web Application Security Index (Home)',
    snippet: 'Index organizing notes on web security foundations, vulnerabilities, and tools (OWASP, XSS, SQLi, etc.).',
    content: `Welcome to your Web Application Security knowledge vault. This index organizes notes on foundational concepts, critical vulnerabilities, and essential testing tools for web applications.

I. Foundations and Context
- Covers basics of web security, historical context, and frameworks like OWASP.

II. Core Web Vulnerabilities
- Injection attacks (SQLi, OS Command Injection, Path Traversal)
- Client-side attacks (XSS)

III. Tools and Practice
- Burp Suite, Web Security Academy, DVWA, TryHackMe
`,
    imageId: 'intro-web-security',
    file: 'intro-web-security.md',
  },
  {
    id: '5',
    title: 'Introduction to Web Application Security',
    snippet: 'Overview of web security, the trust boundary, and the OWASP Top 10.',
    content: `This document provides a formal overview of web application security, tracing its evolution and examining core security challenges. It defines the trust boundary and highlights the OWASP Top 10 as a key resource for developers and security teams.`,
    imageId: 'intro-web-security',
    file: 'intro-web-security.md',
  },
  {
    id: '6',
    title: 'OS Command Injection (CWE-78)',
    snippet: 'Explains command injection mechanisms, separators, attack variants, and mitigation strategies.',
    content: `OS Command Injection is an attack where the application passes unsafe user-supplied data to a system shell. Attackers exploit shell separators (;, &&, |) or encoding to execute arbitrary commands. Variants include argument injection and command injection. Key mitigations: avoid invoking a shell, use safe exec functions that accept argument arrays, implement allowlist input validation, apply least privilege, and minimize the data used in shell commands.`,
    imageId: 'os-command-injection',
    file: 'os-command-injection.md',
  },
  {
    id: '7',
    title: 'Path Traversal (CWE-35)',
    snippet: 'Directory traversal techniques, consequences, and prevention (path normalization and allowlisting).',
    content: `Path Traversal (Directory Traversal) allows attackers to access files outside the intended directory by using sequences like ../, encoded variants, or unicode tricks. Consequences include exposure of sensitive files and further compromise. Mitigations: normalize paths, allowlist filenames, avoid direct file access from untrusted input, and enforce least privilege and isolation.`,
    imageId: 'path-traversal',
    file: 'path-traversal.md',
  },
  {
    id: '8',
    title: 'SQL Injection (CWE-89)',
    snippet: 'Explanation of SQLi, impacts, and defenses such as prepared statements and input validation.',
    content: `SQL Injection allows attackers to manipulate database queries by injecting SQL through unsanitized input. Impacts include data breach, corruption, and full system compromise. Defenses: prepared statements (parameterized queries), input validation, least privilege, and careful use of stored procedures.`,
    imageId: 'sql-injection',
    file: 'sql-injection.md',
  },
  {
    id: '9',
    title: 'The Importance of IT Security',
    snippet: 'CIA Triad, real-world breach examples, and core security principles.',
    content: `This guide highlights confidentiality, integrity, and availability (CIA), the real impact of security breaches, and initial practical exercises like registering on TryHackMe. It emphasizes basic safeguards like encryption, access controls, and backups.`,
    imageId: 'it-security',
    file: 'it-security.md',
  },
  {
    id: '10',
    title: 'Encryption Fundamentals',
    snippet: 'Hash functions, ciphers, key exchange, TLS, and E2EE concepts.',
    content: `An overview of cryptographic building blocks: hash functions (collision resistance), symmetric and asymmetric ciphers (AES, RSA), key exchange (Diffie-Hellman), and TLS handshake. Discusses transport encryption vs end-to-end encryption.`,
    imageId: 'encryption-fundamentals',
    file: 'encryption-fundamentals.md',
  },
  {
    id: '11',
    title: 'Careers in IT Security',
    snippet: 'Overview of red vs blue teams, SOC roles, and the penetration testing lifecycle.',
    content: `Describes cybersecurity career roles, the SOC tier structure (Tier 1..3), red/blue teams, penetration testing process (planning, scanning, exploitation, persistence, reporting), and job growth prospects.`,
    imageId: 'careers-it-security',
    file: 'careers-it-security.md',
  },
];

## 1. Defining Path Traversal 

**Path Traversal** (CWE-35), also known as **Directory Traversal** , is a security vulnerability that allows an attacker to access files and directories stored **outside** of the intended or restricted directory on a web server or application.

|Aspect|Description|
|---|---|
|**Vulnerability**|Improper neutralization of user input that is used to construct file paths.|
|**Attacker's Goal**|To navigate the file system hierarchy beyond the application's root directory.|
|**Mechanism**|Exploiting the **parent directory symbol** (e.g., `../` on Unix/Linux or `..\` on Windows) to move up the file system tree.|

### Example of Exploitation:

- **Vulnerable URL:** `https://example.com/?file=filename.php`.
    
- **Malicious Request:** `https://example.com/?file=../../../../etc/passwd`.
    
- **Resolution:** The malicious input causes the path to traverse directories and access a sensitive system file, like `/etc/passwd`.
    

---

## 2. Attack Techniques and Consequences 

### Attack Techniques

Attackers insert various forms of the "dot-dot-slash" sequence to ascend the directory tree:

- **Simple Sequence:** `../`
    
- **Variations:** Using different path separators (`/`, `\`)
    
- **Percent Encoding:** `%2e%2e%2f` (for `../`)
    
- **Double Encoding:** `%252e%252e%252f`
    
- **Unicode Encoding:** `%u002e%u002e%u002f`
    
- **NULL Bytes:** `%00` (often used to terminate a path string)
    

### Consequences

A successful Path Traversal attack can lead to severe system compromise:

- **Unauthorized Access to Sensitive Information:** Attackers can read confidential files outside the web root, such as system configuration files, database credentials, or system files like `/etc/passwd` or `/etc/shadow`.
    
- **Modification or Deletion of Files:** Attackers may gain the ability to modify or delete critical files, leading to service disruptions and data loss.
    
- **Further System Compromise:** Accessing internal files provides information about the server's architecture, which can be used to plan and execute more sophisticated attacks, potentially leading to a **full system compromise**.
    

---

## 3. Mitigation and Prevention Strategies 

Prevention focuses on strictly controlling how user input is used to access the file system.

- **Validate and Sanitize User Input (Allowlisting):**
    
	- Use an **"accept known good" approach (allowlisting)** instead of trying to block all "bad" characters.
        
	- Explicitly define a list of **allowed files or directories** that the application can access, rejecting any input that falls outside that list.
        
- **Avoid Direct Input Use:**
    
	- **Avoid using user input directly in file paths**.
        
	- When file access is necessary, construct file paths carefully and use built-in functions for **Path Normalization** to neutralize traversal sequences like `../`.
        
- **Access Control and Isolation:**
    
	- Implement **Access Control Measures** and apply the **principle of least privilege**. The application's service account should only have the minimum permissions required to perform its function.
        
	- **Isolate Execution Environments** (e.g., using chroot or containers) to confine the application to a limited file system, preventing traversal to the rest of the host OS.

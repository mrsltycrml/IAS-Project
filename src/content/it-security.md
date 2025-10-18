This guide provides a structured overview of the fundamental concepts of Information Technology (IT) security. It outlines its significance in contemporary society, delineates its guiding principles, and details the initial steps for practical, hands-on learning.

## 1. The Definition and Significance of IT Security

**Information Assurance**, also referred to as IT Security, is the practice of ensuring the protection of digital information and managing the risks associated with its use, storage, and transmission. The objective extends beyond preventing unauthorized access to include guaranteeing the reliability and accessibility of information for authorized entities.

The significance of this discipline is underscored by frequent, real-world security incidents.

- **Illustrative Cases:** The presentation references several major data breaches within the Philippines, which impacted corporations such as **Wendy's**, **Cebuana Lhuillier**, and the **Commission on Elections (COMELEC)**. These incidents resulted in the unauthorized exposure of sensitive personal data belonging to a multitude of individuals, including names, contact information, and credentials. Such events demonstrate that deficiencies in security can precipitate severe real-world consequences for both individuals and organizations.


## 2. The CIA Triad: Core Principles of Security

The foundation of IT security is built upon three core principles, collectively known as the **CIA Triad**: Confidentiality, Integrity, and Availability.

### a. Confidentiality

- **Definition:** This principle is concerned with preventing the unauthorized disclosure of information to individuals, entities, or systems. Its primary function is to enforce privacy and data secrecy.
    
- **Applications:**
    
	- Private digital correspondence.
        
	- Financial account details and transaction histories.
        
	- Protected health information and medical records.
        
- **Protective Measures:**
    
	- **Encryption:** The process of converting data into a coded format to prevent unauthorized access.
        
	- **Access Control Lists (ACLs):** Policies that define permissions for subjects accessing specific objects.
        
	- **Steganography:** The technique of concealing data within another non-secret file or message.


### b. Integrity

- **Definition:** This principle ensures that data remains accurate, consistent, and trustworthy throughout its lifecycle, free from unauthorized modification or corruption.
    
- **Applications:**
    
	- **Financial Transactions:** A monetary transfer of $100 must be recorded as such, without alteration.
        
	- **Legal Documents:** The final version of a contract must be immutable and reflect the agreed-upon terms.
        
	- **User-Generated Content:** Product reviews should originate from legitimate sources.
        
- **Protective Measures:**
    
	- **Data Validation:** Routines that check for the correctness and meaningfulness of data.
        
	- **Version Control Systems:** Systems like Git that record changes to a file or set of files over time.
        
	- **Hashing/Checksums:** The generation of a unique digital signature for a file, which changes if the file is altered, thereby verifying its integrity.


### c. Availability

- **Definition:** This principle ensures that systems and information are accessible and usable upon demand by an authorized entity.
    
- **Applications:**
    
	- **Healthcare Information Systems:** Clinicians require uninterrupted access to patient data in critical situations.
        
	- **E-commerce Platforms:** The platform must remain operational for consumers to conduct business.
        
	- **Cloud Storage Services:** Users must be able to retrieve their files from services like Google Drive or Dropbox.
        
- **Protective Measures:**
    
	- **Denial of Service (DDoS) Mitigation:** Technologies designed to protect a target from being overwhelmed by malicious traffic.
        
	- **Data Backups:** The practice of creating and storing copies of data that can be used for restoration.
        
	- **Load Balancing:** The method of distributing network or application traffic across a number of servers to improve responsiveness and availability.


## 3. Common Methods for Initial Access

Threat actors employ various tactics to achieve initial access to a system, with many targeting human fallibility.

- **Phishing:** A form of social engineering wherein an attacker sends fraudulent communications designed to deceive a target into revealing sensitive information or deploying malicious software.
    
- **Weak or Compromised Credentials:** The use of easily guessable passwords or the reuse of passwords across multiple services significantly increases the risk of an account compromise.


## 4. Laboratory Exercise: Account Creation on TryHackMe

The initial laboratory exercise involves establishing an account on TryHackMe, an online platform for practical cybersecurity education.

**Procedure:**

1. **Navigate to the Website:** Access `[tryhackme.com](http://tryhackme.com/)` via a web browser.
    
2. **Initiate Registration:** Select the "Sign Up" option, typically located in the upper-right quadrant of the homepage.
    
3. **Provide Information:** Complete the registration form using an institutional email address, a unique username, and a strong password.
    
4. **Finalize Registration:** Submit the form to create the account.
    
5. **Email Verification:** Access your email account, locate the verification message from TryHackMe, and activate the enclosed link.
    
6. **Log In:** Return to the TryHackMe website and authenticate using the newly created credentials.
    
7. **Document Completion:** Navigate to your profile page and capture a screenshot for submission.

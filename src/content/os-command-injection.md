## 1. Defining OS Command Injection 

**OS Command Injection** is an attack where the goal is the execution of arbitrary commands on the **host operating system** via a vulnerable application.

|**Aspect**|**Description**|
|---|---|
|**Vulnerability**|It occurs when an application passes **unsafe user-supplied data** (from forms, cookies, HTTP headers, etc.) to a system shell for execution.|
|**Attacker's Goal**|To execute arbitrary commands on the victim's OS.|
|**Consequence**|A successful attack grants the attacker **control of the victim's machine**.|

### Why it's Dangerous:

- Allows arbitrary command execution on the host OS.
    
- Can create vulnerabilities in web applications where the attacker lacks direct OS access.
    
- If the vulnerable application runs with **elevated privileges** (e.g., setuid root), the attacker's commands will also run with those high privileges, increasing damage potential.
    

---

## 2. Attack Mechanism: Special Characters

The attack works by an application concatenating untrusted user input directly into a command string that is then passed to a system shell. The shell interprets **special characters** in the user input as command separators, allowing the attacker to "inject" a new command.

|**Shell Command Separators**|**Function**|
|---|---|
|**`;`**|Separates sequential commands.|
|**`&` or `&&`**|Separates commands for background or conditional execution.|
|**`|`or`|**|Separates pipes between commands.|
|**Newline** (`\n` or `%0a` in URL)|Can also be used to separate commands.|

Example:

If a vulnerable script executes: LIST /home/ + $userName;

And an attacker inputs: ;DELETE ALL FILES

The command executed by the shell becomes: LIST /home/; DELETE ALL FILES.

---

## 3. Main Attack Variants

### Variant 1: Injecting Arguments (Argument Injection)

- **Vulnerable Pattern:** The application runs a fixed program, using the user's input only as an **argument**.
    
- **Attack:** The attacker provides an argument that includes a command separator (e.g., `127.0.0.1; ls -l`) to execute their own command _after_ the original program.
    
- **Example Code:** `system("ping -c 4 " + [USER_INPUT])`.


### Variant 2: Injecting the Command Name (Command Injection)

- **Vulnerable Pattern:** The user-supplied input is used directly to **select the program or command to run**.
    
- **Attack:** The attacker executes an entirely arbitrary command or program of their choosing.
    
- **Example Code:** `exec([USER_COMMAND])`.


---

## 4. Mitigation Strategies 

The primary defense against OS Command Injection is to **avoid using user input directly in commands**.

|**Strategy**|**Description**|
|---|---|
|**Primary Mitigation**|**Use Safe Functions** that execute commands without invoking a shell (e.g., C's `execl()` over `system()`), or that take arguments as an array of strings. Ensure proper **Parameterization, Escaping, and Quoting**.|
|**Input Validation**|Use a **strict allowlist** approach ("accept known good") to define and enforce acceptable inputs (e.g., length, character set, type) and reject anything that doesn't conform.|
|**Least Privilege**|Ensure the application running the command adheres to the **Principle of Least Privilege**. This limits what an attacker can do if a compromise occurs.|
|**Attack Surface Reduction**|Minimize the amount of data used in commands that comes from external control. Keep sensitive data server-side (e.g., in session state).|
|**Vetted Frameworks**|Leverage existing secure libraries or frameworks that are designed to handle command execution safely.| 

# Windows-Server-Home-Lab

## Description
This project demonstrates the setup of a Windows Server 2022 Home Lab
that simulates a small enterprise network environment.

It includes the installation and configuration of Active Directory,
DNS, and DHCP services, along with a Windows client joined to a domain.

The goal of this project is to develop hands-on skills in Windows Server
administration, network infrastructure setup, and basic enterprise IT operations.
 
## Objectives
- Install and configure Windows Server 2022
- Set up Active Directory Domain Services (AD DS)
- Configure DNS for domain name resolution
- Configure DHCP for automatic IP assignment
- Join a Windows client to the domain
- Practice basic troubleshooting in a network environment

## Technology Used
- Windows Server 2022
- Windows 10 / 11 Client
- Active Directory Domain Services
- DNS Server
- DHCP Server
- Hyper-V

## Network Topology
![Nextwork Topology](Images/NetworkTopology.png)

## Network Configuration
- Server IP: 192.168.10.10 <br>
- Subnet: 255.255.255.0 <br>
- Gateway: 192.168.10.1 <br>
- DNS: 192.168.10.10<br>

- DHCP Range: 192.168.10.100 - 192.168.10.200

🪜 Implementation Steps (With Explanations)
1. Create Virtual Machines
Two virtual machines were created to simulate a basic enterprise environment: one server and one client machine.
SRV-DC01 (Windows Server 2022) – used as the Domain Controller
PC-01 (Windows 10/11) – used as a domain-joined client machine
📸 Screenshot: VM creation summary (server + client)
2. Install Windows Server 2022
Windows Server 2022 was installed on the SRV-DC01 virtual machine to prepare it as the main server for the environment.
After installation, the server was renamed to SRV-DC01 for proper identification within the network.
📸 Screenshot: Installed Windows Server desktop or system properties
3. Configure Static IP
A static IP address was assigned to ensure the server maintains a consistent network identity, which is required for Active Directory, DNS, and DHCP services.
IP Address: 192.168.10.10
Subnet Mask: 255.255.255.0
DNS: 192.168.10.10
📸 Screenshot: IPv4 configuration window
4. Install Active Directory Domain Services
The Active Directory Domain Services (AD DS) role was installed to enable domain controller functionality.
After installation, the server was promoted to a Domain Controller and a new forest was created using the domain name:
Domain: company.local
This allows centralized management of users, computers, and network resources.
📸 Screenshot: AD DS installation and domain creation screen
5. Install DNS and DHCP
DNS was configured automatically as part of the Active Directory setup to support domain name resolution.
A DHCP scope was also created to automatically assign IP addresses to client devices within the network.
DHCP Range: 192.168.10.100 – 192.168.10.200
DHCP Server was authorized within the domain
📸 Screenshots:
DHCP scope configuration
Authorized DHCP server
6. Join Client to Domain
The Windows client (PC-01) was configured to join the domain company.local.
This step integrates the client machine into the centralized Active Directory environment, allowing domain-based authentication.
After joining, the client was restarted and logged in using a domain account.
📸 Screenshot: Domain join confirmation or login screen
7. Testing
Basic network and domain functionality were tested to ensure proper configuration.
Tests performed:
Ping test to verify network connectivity
DNS resolution test using nslookup
DHCP verification using ipconfig /all
These tests confirm that all services (AD, DNS, DHCP) are functioning correctly.
📸 Screenshots:
Ping results
DNS test output
DHCP IP assignment

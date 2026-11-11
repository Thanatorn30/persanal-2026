// ข้อมูลทั้งหมดของหน้า Home — แก้ข้อความ/ลิงก์/รูปได้ที่ไฟล์นี้ไฟล์เดียว
// รูป (avatar / image) ถ้าเว้นว่างไว้ จะแสดง placeholder gradient แทน (วางรูปไว้ใน /public แล้วใส่ path เช่น "/assets/img/me.jpg")

export const profile = {
  shortName: "Peet",
  fullName: "Thanatorn Thammasakorn",
  role: "Fullstack Developer",
  location: "Bangkok, Thailand",
  phone: "0982651433",
  email: "peet.thanatorn@gmail.com",
  avatar: "/assets/img/ui/me/me.png",
  bio: "Full-stack developer who builds SaaS products end to end — B2C and B2B — from identifying the problem and designing features to launching a product with real, active users.",
  cvUrl: "/assets/cv/cv-thanatorn.pdf",
  portfolio: "alexcarter.dev",
};

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About me", href: "/#about" },
  { label: "Project", href: "/#projects" },
  // { label: "Services", href: "/#services" },
];

export const brandLogos = [
  "Lumen",
  "Northpeak",
  "Orbit",
  "Pulsse",
  "Fitloop",
  "Learnly",
  "Vertex",
  "Kinetic",
];

export const about = {
  text: "Full-Stack Developer & Co-Founder(SaaS) with experience spanning both corporate work and building SaaS products from the ground up (0-to-1) — covering problem analysis, solution design, system development, and direct sales/customer management. Proven track record with real users and recurring revenue.",
  stats: [
   
  ],
};

// skill ที่ใช้จริงใน Hiveseat, PromptChex และใน CV
// (เรียงตาม: BA/PO → system design → front-end → back-end → integrations → infrastructure → testing)
export const skills = [
  "Business Analysis",
  "User Stories",
  "Product Ownership",
  "System Architecture Design",
  "Database Design (ERD)",
  "API Design & Specification",
  "JavaScript",
  "React",
  "Next.js",
  "Zustand",
  "Styled Components",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Express",
  "REST API",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Prisma",
  "Sequelize",
  "Redis",
  "Socket.IO",
  "LINE LIFF",
  "LINE Messaging API",
  "Stripe",
  "Telegram API",
  "Vercel",
  "Render",
  "Cloudflare (Tunnel/Auth)",
  "Playwright",
  "k6",
  "Vitest",
  "Git",
];

// ประสบการณ์ทำงาน (ตรงกับ CV) — detail = สรุป 1 บรรทัด, points = bullet รายละเอียด
export const experience = [
  {
    period: "Jul 2026 – Present",
    company: "Co-Founder & Full-Stack Developer — PromptChex",
    detail: "Built an HR and payroll SaaS for Thai SMEs.",
    points: [
      "Tech stack: Backend — MongoDB, Prisma, Node.js, Stripe (third-party payment), Telegram API (system notifications) / Frontend — Next.js, Bootstrap, API integration",
      "Designed the system to calculate Thai labour law compliance (social security, withholding tax, daily wages, overtime) in a single click",
      "Designed and built LINE OA/LIFF integration as the primary employee-facing channel, replacing fingerprint scanners, with GPS location verification against a configurable check-in radius",
      "Designed the database schema, along with the data dictionary and API specification documentation",
      "Designed features to solve real-world problems: an approval workflow to prevent time-in/time-out fraud, and bulk payroll calculation for 10+ employees in a single click",
      "Planned the marketing strategy and sold directly to B2B customers, including negotiation",
    ],
  },
  {
    period: "Jan 2026 – Present",
    company: "Co-Founder & Full-Stack Developer — Hiveseat (hiveseat.co)",
    detail:
      "Designed and built an event seat management platform that helps users cut guest seating time from hours to minutes.",
    points: [
      "Tech stack: Backend — MySQL, Sequelize, Node.js, Stripe (third-party payment), Telegram API (system notifications) / Frontend — Next.js, Bootstrap, API integration",
      "Reached 700+ active users with recurring monthly revenue",
      "Designed UX/UI around an “understandable within 5 minutes” usability principle",
      "Designed the payment flow with third-party integration for automated payment collection",
      "Set the pricing structure based on customers’ willingness to pay",
      "Continuously iterated the product based on real user feedback to fit market needs",
      "Owned everything from marketing strategy to system development",
    ],
  },
  {
    period: "Nov 2023 – Aug 2025",
    company: "Fullstack Developer — TechStellar Co.,Ltd.",
    detail:
      "Primarily a front-end role, converting UI designs into code with React.js and Next.js and integrating APIs to connect with backend services.",
    points: [
      "JIB Computer (e-commerce website) — Converted UX/UI team designs into functional web pages with Next.js; integrated APIs with backend systems to fetch and display product and order data",
      "Koala March Thailand (LINE application) — Converted designs into code for a LINE application; integrated APIs with the backend; built a QR code scanning system for snack boxes to verify authenticity and record scan data to the database",
      "Changan — Full-stack responsibility: fixed and improved the frontend, integrated APIs, and handled backend responses for display and further processing on the frontend",
      "HealthUp — Converted UI designs into a web application with React.js",
    ],
  },
];

export const education = [
  {
    period: "2013 – 2016",
    title: "Economic",
    detail:
      "Bachelor's Degree, Faculty of Economics Kasetsart University",
  },
 
];

// แต่ละ project มี id (ใช้เป็น url /project/[id]) และ sections = เนื้อหาในหน้ารายละเอียด
// section รองรับ: body (ย่อหน้า), list (bullet), items (การ์ด title/detail), stats (ตัวเลข value/label),
// chart (กราฟเส้น { title, subtitle, unit, data: [{ label, short, value }] })
export const projects = [
  {
    id: "worknest",
    name: "Hiveseat",
    title: "Seating management platform for weddings & events",
    image: "/assets/img/projects/hiveseat/custom.png",
    tone: ["#004d9b", "#007fff"],
    summary:
      "A SaaS that turns wedding seating from a stressful Excel exercise into a few clicks — build the floor plan, seat every guest, then let guests find their own table by scanning a QR code on the day.",
    meta: {
      client: "Bride and groom , Event Organizer",
      role: "Business Analyst · Marketing · Product Owner · Full-stack Developer",
      year: "2026",
      duration: "Ongoing",
    },
    stack: [
      "Next.js",
      "React",
      "Zustand",
      "Styled Components",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Redis",
      "Stripe",
      "k6",
      "Playwright",
    ],
    liveUrl: "https://hiveseat.co",
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "Hiveseat is a seating management tool for events, and most of its customers are weddings. A host enters the number of guests, the system generates the floor plan, guests are assigned to tables, and on the event day guests scan a QR code to see exactly where they sit.",
          "I worked on it end to end in three roles: as a BA I mapped how hosts plan seating today and where it breaks; as a PO I decided what to build first and how the product makes money; as a full-stack developer I built the web app, the API and the database.",
        ],
      },
      {
        id: "discovery",
        title: "Problem discovery",
        body: [
          "I started from the host’s real journey instead of from features: collect the guest list → design the room → decide who sits where → welcome guests on the day. Each step had its own pain, and the last one is the most visible because it happens in front of every guest.",
        ],
        items: [
          {
            title: "Planning in Excel",
            detail:
              "Hosts draw the room in spreadsheets or on paper. Every change in guest count means redrawing the whole plan.",
          },
          {
            title: "Hard to seat many guests",
            detail:
              "With 200–500 guests, nobody can see which tables are full, which seats are free and who is still unassigned.",
          },
          {
            title: "Queues at the entrance",
            detail:
              "On the day, guests line up to ask staff for their table. The welcome desk becomes the bottleneck of the whole event.",
          },
          {
            title: "No idea who has arrived",
            detail:
              "Check-in is a paper list, so the host cannot tell who came and has nothing to send back after the event.",
          },
        ],
      },
      {
        id: "users",
        title: "Users & roles",
        body: [
          "One event has several people with very different goals, so I modelled them as separate roles from the beginning. This shaped both the screens and the permission model in the API.",
        ],
        items: [
          {
            title: "Host / planner (admin)",
            detail:
              "Owns the event. Builds the layout, imports guests, seats them and buys a package.",
          },
          {
            title: "Guest",
            detail:
              "Has no account. Scans a QR code on a phone and needs their table in seconds.",
          },
          {
            title: "Platform owner",
            detail:
              "Manages packages, prices, quotas, PDPA consent texts and monitors activity across all customers.",
          },
        ],
      },
      {
        id: "requirements",
        title: "Requirements as user stories",
        body: [
          "I turned each pain point into a user story with a clear acceptance check, so every feature could be traced back to a real problem.",
        ],
        list: [
          "As a host, I enter guest count, seats per table, columns and row breaks, so that the floor plan is generated for me — accepted when the table count always matches guests ÷ seats per table.",
          "As a host, I drag tables and stages anywhere and mix round, Chinese and long tables, so that the plan matches my actual venue.",
          "As a host, I click a table on the plan and pick guests for it, so that I can seat people where I can see the room — accepted when booked and free seats update immediately.",
          "As a host, I import my guest list from an Excel template, so that I don’t type hundreds of names again.",
          "As a host, I see who has checked in and export the list to Excel, so that I know the attendance during and after the event.",
          "As a guest, I scan a QR code, search my name and see my table highlighted on the plan, so that I don’t need to queue and ask staff.",
        ],
      },
      {
        id: "prioritization",
        title: "Prioritization & scope",
        body: [
          "I ranked features by how much stress they remove on the event day versus how hard they are to build. The MVP covered the whole journey with the simplest version of each step: an auto-generated grid layout, Excel import, click-to-seat and the QR guest page.",
          "Custom drag-and-drop layout came later, once real venues showed that a perfect grid rarely matches the room.",
        ],
        items: [
          {
            title: "Now — MVP",
            detail:
              "The full journey, end to end: auto layout (stage at the front, stage in the middle or long tables), Excel guest import, click-to-seat and QR guest search. Around it: packages with event and guest quotas paid through Stripe, PDPA consent, sub-admin access, an activity log for every change, and Telegram alerts to the owner on each sign-up and purchase.",
          },
          {
            title: "Next — fit real venues",
            detail:
              "A custom drag-and-drop layout, so the plan matches the actual room: mixed table types, table groups, freely placed stages and PNG export of the finished plan.",
          },
          {
            title: "Later — event-day add-ons",
            detail:
              "A custom background image for the plan, so it matches the wedding theme, and guest check-in, so the host can see who has arrived in real time.",
          },
        ],
      },
      {
        id: "decisions",
        title: "Key product decisions",
        body: [
          "Three decisions where I had to weigh speed to market, ease of use and build cost against each other:",
        ],
        items: [
          {
            title: "Ship the simple layout first",
            detail:
              "I held back the custom layout so the product could reach real hosts sooner and test the market. The first release kept only the basics a host can use right away, with nothing new to learn: an auto-generated layout, Excel import, click-to-seat and the QR guest page.",
          },
          {
            title: "Keep custom layout easy to use",
            detail:
              "Custom layout mixes table types, table groups and stages, and takes many setup and move steps, so it could easily become confusing. I designed each step around the host: a set of tables is one group that moves together, which keeps rows straight.",
          },
          {
            title: "Upload a background instead of building décor",
            detail:
              "Letting hosts build the room from ready-made pieces would make the editor harder to use and take much longer to build. Instead, hosts upload a background image that already shows their venue design, then drag the tables into place on top of it in Hiveseat.",
          },
        ],
      },
      {
        id: "solution",
        title: "The solution",
        body: [
          "Six features, each one mapped to a step of the host’s journey:",
        ],
        items: [
          {
            title: "1. Auto layout",
            detail:
              "Enter guests, columns and row breaks — the system calculates tables and draws the plan in one of three presets.",
          },
          {
            title: "2. Custom layout",
            detail:
              "Drag tables and stages freely; mix round, Chinese and long tables (4 orientations); group tables; save the plan as a transparent PNG.",
          },
          {
            title: "3. Click-to-seat",
            detail:
              "Click a table icon on the plan, pick guests, and see booked vs. free seats immediately.",
          },
          {
            title: "4. Excel import",
            detail:
              "Upload guests from a template, or add them one by one with group and note.",
          },
          {
            title: "5. Check-in & export",
            detail: "Track attendance live and export the full list to Excel.",
          },
          {
            title: "6. QR self-service",
            detail:
              "Guests scan, search their name, see their table highlighted and check themselves in.",
          },
        ],
        images: [
          {
            src: "/assets/img/projects/hiveseat/auto.png",
            caption:
              "Auto layout — enter guests, seats per table, columns and row break; the plan is calculated for you.",
          },
          {
            // TODO: ใส่ภาพหน้าตั้งค่า custom layout ที่ path นี้
            src: "/assets/img/projects/hiveseat/custom-layout.png",
            caption:
              "Custom layout settings — add a table group with its type (round, Chinese or long), number of tables and seats per table, add stages, then drag each group into place over the uploaded background and export the plan as PNG.",
          },
          {
            src: "/assets/img/projects/hiveseat/assign.png",
            caption:
              "Click-to-seat — click a table on the plan, filter by group and pick guests.",
          },
          {
            src: "/assets/img/projects/hiveseat/guests.png",
            caption:
              "Excel import — duplicates are skipped and new guest groups are created automatically.",
          },
          {
            src: "/assets/img/projects/hiveseat/checkin.png",
            caption:
              "Check-in — live attendance by group, with self check-in via QR and Excel export.",
          },
          {
            src: "/assets/img/projects/hiveseat/qr.png",
            caption:
              "Guest experience — scan the QR, search your name and see your table highlighted. (All screens are mock-ups with sample data.)",
          },
        ],
      },
      {
        id: "architecture",
        title: "Architecture (Full-stack)",
        body: [
          "Front-end: Next.js and React with Zustand for state and Styled Components for UI. The floor plan editor uses react-moveable for drag & drop and html2canvas to export the plan as an image; xlsx handles Excel import and export.",
          "Back-end: a Node.js / Express REST API with Sequelize on PostgreSQL. Role-based middleware separates platform owner, host and sub-admin. Stripe handles payments, Resend sends email, files go to S3-compatible storage, and node-cron runs maintenance jobs.",
        ],
        list: [
          "Data model: event → table groups → tables → seats ← guest list, plus guest groups, stages, check-in log, packages and quota slots",
          "Schema changes shipped as versioned Sequelize migrations so live events were never broken",
          "Activity log stores only changed fields with a retention clean-up job, keeping the table small as usage grows",
        ],
      },
      {
        id: "flow",
        title: "How it works (system flow)",
        body: [
          "The main path through the system, from sign-up to the event day, and what the API does at each step:",
        ],
        // แผนภาพ flow (FlowDiagram): actor = ใครทำ, services = ระบบที่เกี่ยวข้องในขั้นนั้น
        flow: [
          {
            title: "Sign up & buy a package",
            actor: "Host",
            detail: "The API confirms the payment with Stripe, records the purchase and its expiry, creates a quota slot of event credits and alerts the owner.",
            services: ["Stripe", "PostgreSQL", "Telegram"],
          },
          {
            title: "Create an event",
            actor: "Host",
            detail: "The API checks the quota slot and guest limit, creates the event with an auto or custom layout and uses one credit.",
            services: ["PostgreSQL"],
          },
          {
            title: "Build the floor plan",
            actor: "Host",
            detail: "Table groups, tables, seats and stages are saved through bulk endpoints. The background image goes to storage.",
            services: ["PostgreSQL", "S3"],
          },
          {
            title: "Add & seat guests",
            actor: "Host",
            detail: "Guests are imported from Excel in one request. Each seating change is logged and clears only this event’s cache.",
            services: ["Excel", "PostgreSQL", "Redis"],
          },
          {
            title: "Find my table",
            actor: "Guest",
            detail: "Guests scan the QR code and search their name. Public endpoint, no login, served from the Redis cache.",
            services: ["Redis"],
          },
          {
            title: "Check-in & export",
            actor: "Guest · Host",
            detail: "Each check-in writes a log and marks the guest as arrived. The host sees live attendance and exports to Excel.",
            services: ["PostgreSQL", "Excel"],
          },
        ],
      },
      {
        id: "performance",
        title: "Built for the event day",
        body: [
          "The hardest moment for the system is the same as for the host: many guests scanning the QR code within a few minutes. I treated that as a non-functional requirement from the start.",
        ],
        list: [
          "Redis cache on the guest search endpoint, with cache keys grouped by category so a single change to an event clears only that event’s cache",
          "Reviewed every heavy query and added indexes on the columns used for filters and joins (event, table, seat, guest)",
          "Load tested the main endpoints with k6 error-rate thresholds and a pass grade for each endpoint",
          "Wrote end-to-end test cases for Playwright covering the main host and guest flows",
        ],
      },
      {
        id: "results",
        title: "Results",
        body: ["What is in production today, at Hiveseat"],
        stats: [
          { value: "6", label: "Core features covering the full host journey" },
          {
            value: "130+",
            label: "API endpoints across events, guests, seating and billing",
          },
          {
            value: "0%",
            label:
              "Error rate at 30 concurrent users on the guest list load test",
          },
        ],
        // จำนวนผู้ใช้ที่สมัครในแต่ละเดือน (รวมจากยอดรายวันในระบบ ข้อมูลถึง 10 พ.ย. 2026)
        chart: {
          title: "All Users",
          subtitle: "1,094 hosts signed up from launch in late Dec 2025 to 10 Nov 2026",
          unit: "users",
          data: [
            { label: "Dec 2025", short: "Dec", value: 2, note: "launched 29 Dec" },
            { label: "Jan 2026", short: "Jan", value: 242 },
            { label: "Feb 2026", short: "Feb", value: 135 },
            { label: "Mar 2026", short: "Mar", value: 110 },
            { label: "Apr 2026", short: "Apr", value: 125 },
            { label: "May 2026", short: "May", value: 96 },
            { label: "Jun 2026", short: "Jun", value: 68 },
            { label: "Jul 2026", short: "Jul", value: 61 },
            { label: "Aug 2026", short: "Aug", value: 69 },
            { label: "Sep 2026", short: "Sep", value: 68 },
            { label: "Oct 2026", short: "Oct", value: 84 },
            { label: "Nov 2026", short: "Nov", value: 34, note: "1–10 Nov, month in progress" },
          ],
        },
      },
      {
        id: "learnings",
        title: "What I learned",
        list: [
          "Start from the worst moment of the journey. For weddings that is the entrance queue, so the QR guest page mattered more than any admin feature.",
          "A data model is a product decision. Grouping tables made drag & drop simple for users and cheap to store.",
          "Ship the simple version first. The grid layout proved demand; real venues then told me exactly what the custom layout had to do.",
          "Write the analysis before the migration. A short requirements and schema document saved rework and kept existing events safe.",
        ],
      },
    ],
  },
  {
    id: "promptchex",
    name: "PromptChex",
    title: "Attendance & payroll platform for small businesses, run through LINE",
    // ภาพทั้งหมดแคปจาก prompt-chex-fe-mock-data (โหมด mock ข้อมูลตัวอย่าง)
    image: "/assets/img/projects/promptchex/cover.png",
    tone: ["#222222", "#0071e3"],
    summary:
      "A SaaS for Thai small businesses that replaces paper time sheets, LINE chat requests and Excel payroll. Employees check in, ask for leave and get their payslip inside LINE; the owner approves everything in one place and runs payroll in a few clicks.",
    meta: {
      client: "Small business owners (cafés, shops, restaurants)",
      role: "Business Analyst · Product Owner · Full-stack Developer",
      year: "2025–2026",
      duration: "Ongoing",
    },
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Zustand",
      "LINE LIFF",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Socket.IO",
      "Stripe",
      "Playwright",
    ],
    liveUrl: "https://promptchex.com/",
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "PromptChex is an attendance, leave and payroll system for small businesses with one or a few branches. The owner works in a web back office; employees never install an app, because everything they need runs inside LINE, which they already use every day.",
          "I worked on it end to end: as a BA I turned Thai labour and payroll rules into written business logic, as a PO I decided the scope and the package model, and as a full-stack developer I built the web app, the LINE apps, the API and the database.",
        ],
      },
      {
        id: "discovery",
        title: "Problem discovery",
        body: [
          "I followed one pay cycle of a small business: employees clock in → ask for leave or an advance → the owner checks hours → calculates pay → hands out payslips. Every step lived in a different place.",
        ],
        items: [
          {
            title: "Time sheets on paper",
            detail:
              "Check-in is a paper sheet or a photo in the LINE group. Nobody can prove who was late or worked overtime.",
          },
          {
            title: "Requests lost in chat",
            detail:
              "Leave and salary advances are asked for in LINE chat, so approvals and balances are not recorded anywhere.",
          },
          {
            title: "Payroll by hand in Excel",
            detail:
              "Daily, hourly and monthly staff, late deductions, OT, holidays, social security and withholding tax are all calculated by hand each period.",
          },
          {
            title: "No payslips",
            detail:
              "Employees get a transfer with no breakdown, so every question about pay goes back to the owner.",
          },
        ],
      },
      {
        id: "users",
        title: "Users & roles",
        body: [
          "Each role works in the channel that suits them, so the same data is shown in three different apps.",
        ],
        items: [
          {
            title: "Business owner (admin)",
            detail:
              "Sets up businesses, branches, wage rules and shifts in the web back office, approves requests and runs payroll. Also gets alerts and a daily summary in LINE.",
          },
          {
            title: "Supervisor",
            detail:
              "An employee who can approve check-ins, leave and advances for their branch from their own LINE app.",
          },
          {
            title: "Employee",
            detail:
              "Has no password. Joins from an invite link, then checks in, asks for leave or an advance and reads payslips inside LINE.",
          },
        ],
      },
      {
        id: "decisions",
        title: "Key product decisions",
        body: [
          "Three decisions that shaped the product:",
        ],
        items: [
          {
            title: "LINE instead of a mobile app",
            detail:
              "Small business staff will not install another app. Running the employee side as LINE LIFF pages removed sign-up, passwords and app store releases, and lets the system push results back as LINE messages.",
          },
          {
            title: "Write the rules before the code",
            detail:
              "Payroll errors cost real money, so every rule (wage types, late, OT, holidays, leave, tax) is written as a business-logic document with edge cases first. The code and the QA tests are checked against that document.",
          },
          {
            title: "Approve first, pay later",
            detail:
              "Only approved check-ins, leave and advances are counted in payroll. A period moves from draft to approved before payslips can be sent, so nothing reaches employees by accident.",
          },
        ],
      },
      {
        id: "solution",
        title: "The solution",
        body: ["Six features, one for each step of the pay cycle:"],
        items: [
          {
            title: "1. Wage rules & shifts",
            detail:
              "Monthly, half-monthly, daily and hourly pay, with OT rates, holiday rates, late limits and fixed or rotating shifts, including overnight shifts.",
          },
          {
            title: "2. Check-in with location",
            detail:
              "Employees check in from LINE; the API rejects check-ins outside the branch radius and works out late minutes and OT.",
          },
          {
            title: "3. Leave & advances",
            detail:
              "Requests are sent from LINE, appear live in the back office and are approved by the owner or a supervisor.",
          },
          {
            title: "4. Payroll in one click",
            detail:
              "Create a period, check pending items, calculate pay for the whole branch, adjust any line, then approve.",
          },
          {
            title: "5. Payslips in LINE",
            detail:
              "Approved payslips are sent to each employee’s LINE, with full detail of hours, OT, leave, advances, tax and deductions.",
          },
          {
            title: "6. Owner alerts",
            detail:
              "New requests reach the owner in real time, plus a daily attendance summary in LINE every morning.",
          },
        ],
        images: [
          {
            src: "/assets/img/projects/promptchex/dashboard.png",
            caption: "Business overview — staff, attendance, leave and late counts for today, plus everything waiting for approval.",
          },
          {
            src: "/assets/img/projects/promptchex/wage-setting.png",
            caption: "Wage rules — monthly, half-monthly, daily and hourly pay with holiday and OT rates in one table.",
          },
          {
            src: "/assets/img/projects/promptchex/check-in-out.png",
            caption: "Check-in & out — on-time, late and absent at a glance, with approve, reject and check in on behalf of an employee.",
          },
          {
            src: "/assets/img/projects/promptchex/leave-absent.png",
            caption: "Leave requests — filter by status and branch, approve or reject in one click.",
          },
          {
            src: "/assets/img/projects/promptchex/salary.png",
            caption: "Payroll period — calculated pay for every employee, ready to review and send as payslips to LINE.",
          },
          {
            src: "/assets/img/projects/promptchex/payslip.png",
            caption: "Payslip — earnings, deductions and net pay, with tabs for attendance, OT, tax, advances and leave.",
          },
          {
            src: "/assets/img/projects/promptchex/line-apps.png",
            caption:
              "LINE apps — employee without shifts, employee with morning and overnight shifts, and the owner’s LINE dashboard. (All screens use sample data.)",
            wide: true,
          },
        ],
      },
      {
        id: "architecture",
        title: "Architecture (Full-stack)",
        body: [
          "Front-end: Next.js and React with Tailwind CSS and shadcn/ui for the back office, Zustand for state, and LINE LIFF for the employee and owner apps inside LINE. Socket.IO keeps approval lists live; payslips are rendered to PDF in the browser.",
          "Back-end: a Node.js / Express REST API with Prisma on PostgreSQL. JWT separates owner and employee access, and every query checks ownership through business → branch → employee. LINE Messaging API sends payslips and alerts, Stripe handles subscriptions, Resend sends email, and node-cron runs the daily summary.",
        ],
        list: [
          "Data model: owner → business → branch → employee, with wage rules, shifts, check-ins, leave, advances, tax settings and payroll periods → payroll items → payslips",
          "Package quotas (businesses, branches, employees) are counted on every create and delete",
          "Business rules live in versioned documents with edge cases, tested with Vitest and a QA harness that replays real scenarios",
        ],
      },
      {
        id: "flow",
        title: "How it works (system flow)",
        body: ["One pay cycle through the system:"],
        flow: [
          {
            title: "Set up the business",
            actor: "Owner",
            detail: "Create branches with a location and radius, positions, wage rules and shifts. Quotas are checked against the package.",
            services: ["PostgreSQL", "Stripe"],
          },
          {
            title: "Invite employees",
            actor: "Owner · Employee",
            detail: "Each employee gets a one-time invite link that binds their LINE account. No password is ever created.",
            services: ["LINE LIFF"],
          },
          {
            title: "Check in & out",
            actor: "Employee",
            detail: "The API checks the shift window and the distance to the branch, then records late minutes and OT.",
            services: ["LINE LIFF", "PostgreSQL"],
          },
          {
            title: "Request & approve",
            actor: "Employee · Owner",
            detail: "Leave and advance requests reach the owner live and in LINE. The owner or a supervisor approves them.",
            services: ["Socket.IO", "LINE"],
          },
          {
            title: "Calculate payroll",
            actor: "Owner",
            detail: "Approved attendance, leave, advances and tax settings become payroll items. Each line can be adjusted while it is a draft.",
            services: ["PostgreSQL"],
          },
          {
            title: "Approve & send slips",
            actor: "Owner · Employee",
            detail: "Once the period is approved, each employee receives their payslip as a LINE message.",
            services: ["LINE"],
          },
        ],
      },
      {
        id: "payroll-rules",
        title: "Turning labour rules into code",
        body: [
          "The hardest part was not the screens but the rules. Each one was written down with its reason before it was coded:",
        ],
        list: [
          "Paid hours start at the shift start, even if the employee checks in early",
          "Hourly staff are never charged a late deduction, because late arrival already reduces their paid hours",
          "Monthly staff working on a holiday get an extra holiday premium on top of their salary, following the Labour Protection Act",
          "Social security is based on normal wages only, without OT or holiday premiums; withholding tax includes them",
          "Overnight shifts count toward the day the shift started, with all times in Bangkok time",
        ],
      },
      {
        id: "learnings",
        title: "What I learned",
        list: [
          "Meet users where they already are. Putting the employee side in LINE did more for adoption than any feature.",
          "In payroll, the document is the spec. Writing each rule with its edge cases first made bugs a disagreement with the document, not a guess.",
          "Real-time needs a checklist. Every page that listens for live updates must reconnect on load, or events silently never arrive.",
        ],
      },
    ],
  },
];

export const getProjectById = (id) => projects.find((p) => p.id === id);

export const services = [
  {
    icon: "dashboard",
    title: "UI/UX Design",
    detail:
      "Designing intuitive, user-friendly interfaces that look great and are easy to use.",
  },
  {
    icon: "brand",
    title: "Brand Design",
    detail:
      "Creating memorable visual identities, from logos and colors to typography.",
  },
  {
    icon: "target",
    title: "Landing Page Design",
    detail:
      "Building conversion-focused landing pages with clear messaging and strong CTAs.",
  },
  {
    icon: "code",
    title: "Front-end Development",
    detail:
      "Building fast, responsive, and fully functional websites with modern tooling.",
  },
];

export const pricing = [
  {
    name: "Starter",
    price: "$299",
    unit: "/ Project",
    detail:
      "A simple, affordable way to launch a polished one-page website fast.",
    features: [
      "1 Landing page",
      "Responsive design",
      "Mobile optimization",
      "Contact form setup",
      "2 Revisions",
      "Email support",
      "7-day delivery",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$598",
    unit: "/ Project",
    detail: "A complete multi-page website for growing brands that need more.",
    features: [
      "Up to 5 pages",
      "Custom UI/UX design",
      "CMS & blog setup",
      "Basic SEO setup",
      "4 Revisions",
      "Priority support",
      "14-day delivery",
    ],
    popular: true,
  },
];

export const testimonials = [
  {
    quote:
      "Alex turned our rough idea into a clean, modern website in under two weeks. Communication was clear, and the result exceeded expectations.",
    name: "Mark Sullivan",
    role: "Founder, Pulsse Studio",
  },
  {
    quote:
      "Excellent attention to detail. Our marketing site looks professional, works perfectly on mobile, and users find it easy to navigate.",
    name: "Kevin Turner",
    role: "Product Manager, Fitloop",
  },
  {
    quote:
      "From the first wireframe to launch, everything was handled professionally. The design captures our brand and our students love it.",
    name: "David Anderson",
    role: "Co-founder, Learnly",
  },
  {
    quote:
      "Fast, reliable, and great to work with. The brand identity and website came together beautifully and were delivered on time.",
    name: "Ryan Mitchell",
    role: "Creative Lead, Orbit Agency",
  },
  {
    quote:
      "Our new landing page looks sharp and converts far better than the old one. The whole process felt simple, fast, and organized.",
    name: "James Carter",
    role: "Marketing Director",
  },
  {
    quote:
      "Every section was thoughtfully designed, and the site is easy for our team to update. I would definitely work together again.",
    name: "Robert Hayes",
    role: "CEO, Northpeak Labs",
  },
];

export const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "Most projects are completed within 7–14 business days. A single landing page usually takes about a week, while multi-page websites take up to two weeks.",
  },
  {
    question: "What services do you offer?",
    answer:
      "UI/UX design, brand identity, landing pages and front-end development — from first sketch to a live, responsive website.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing starts at $299 for a one-page site. Larger projects are quoted based on the number of pages and features.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "The Starter plan includes 2 revisions and the Professional plan includes 4. Extra rounds can be added anytime.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Every site is designed and tested for mobile, tablet and desktop screens.",
  },
  {
    question: "Can I update the website myself after launch?",
    answer:
      "Absolutely. I set up an easy editing workflow and walk you through it before handover.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a free call or send a message through the form below. We'll discuss your goals and I'll send a proposal within 24 hours.",
  },
];

export const contactOptions = {
  services: [
    "UI/UX Design",
    "Front-end Development",
    "Brand Logo Design",
    "Landing Page Design",
  ],
  budgets: ["$500", "$800", "$1,200", "$2,000"],
};

export const footer = {
  headline: "Want my CV? Please download it below.",
  menu: [
    { label: "Home", href: "/#home" },
    { label: "Projects", href: "/#projects" },
  
  ],
  social: [
    { label: "X (Twitter)", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
};

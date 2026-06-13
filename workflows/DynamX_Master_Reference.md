# DynamX Institute — Master Reference Document
## Carry this into every new thread. It contains all decisions, content, and context built to date.

---

## Context — Who This Is For

**Organisation:** DynamX Institute
**What DynamX is:** A training organisation (never referred to as a "program") that runs an intensive 10-week Power Platform consulting training.
**Students:** Mostly university students working casual retail jobs alongside study. Newly certified Microsoft Power Platform consultants who have completed the DynamX training and are preparing for interviews scheduled 3 to 4 weeks after training ends.

**Where students are at the point of using these documents:**
- LVL 3.1 Business System: complete and ready to demo
- PL-200: studied, exam to be sat before Week 10 Session 3
- PL-900: already passed (Week 3 of training)
- Interview prep: starting now
- LinkedIn: not yet optimised
- Resume: not yet built

---

## Global Rules — Apply Across All Documents and Sessions

- Never use "junior". Use "Power Platform consultant", "newly certified consultant", or "associate consultant"
- Never use em dashes. Restructure sentences using commas or colons
- Never refer to DynamX Institute as a "program". It is a training organisation
- No pronouns anywhere in resume content
- DynamX training is always described as "consulting training" or "the DynamX training", never "a course" or "a program"
- Resume is written in implied first person: no "I", no "Alex is..." — just action verbs and outcomes
- Experience title is always "Power Platform Consultant (Training)" — never "Power Platform Consultant (Program)"

---

## What Has Been Built — Completed Documents

All three documents are built, validated, and finalised. The colour scheme across all three matches the Isaac Wright resume design (approved in this thread).

### Colour Palette (All Three Documents)
- Header background: `3A3838` (charcoal)
- Section bars: `22779D` (steel blue)
- Accent / placeholder text: `085296` (dark blue)
- Light tint: `D9EAF3`
- Body text: `333333`
- Secondary text: `666666`
- White: `FFFFFF`

### Build Stack
- Node.js with `docx` npm package
- Validation: `python /mnt/skills/public/docx/scripts/office/validate.py`
- Preview: LibreOffice headless to PDF, then `pdftoppm`
- Output: `/mnt/user-data/outputs/`

---

### Document 1: Resume Framework (COMPLETE)
**File:** `DynamX_Resume_Framework.docx`
**Pages:** 5
**Contents:**
1. What a Resume Is For (10-second rule)
2. Resume Structure (section order table)
3. Section Rules (header, summary, certifications, experience, skills, education) with weak/strong callout boxes
4. Formatting Rules
5. Common Mistakes table
6. Cover Letter (when to use, 4-paragraph structure, full template)
7. Worked Example — Alex Jordan (fictionalised) rendered in the two-column resume template design

**Worked example design notes:**
- Two-part header: charcoal name bar + steel blue contact/role bar
- Left column: Professional Overview, Certifications, Education (light background tint)
- Right column: Experience with charcoal job bar, Technical Skills, References
- Matches the final uploaded resume template exactly

---

### Document 2: Resume Template (COMPLETE)
**File:** `DynamX_Resume_Template_v2.docx`
**This is the final approved template.** Uploaded by user and confirmed as locked in.
**Design:**
- Charcoal (`3A3838`) full-width name header, large centered name
- Steel blue (`22779D`) sub-bar below with contact details and role title
- Two columns: left narrower (light tint background), right wider
- Left column: Professional Overview, Certifications, Education
- Right column: Experience (charcoal job bars), Technical Skills, References
- Bold blue placeholders throughout with italic grey hint text
- Instructions box at bottom

**Key template decisions:**
- Section label is "Professional Overview" not "Professional Summary"
- Experience title: "Power Platform Consultant (Training)" — DynamX Institute
- No photo slot
- References section included (students add "Contact details available upon request")
- Instructions box at bottom explains how to use the template

---

### Document 3: LinkedIn Framework (COMPLETE)
**File:** `DynamX_LinkedIn_Framework.docx`
**Pages:** 6
**Contents:**

#### Part 1 — Professional Profile Photo
- What to wear (business shirt/blouse, blazer, dark/neutral colours)
- Hair and grooming
- The photo (head and shoulders, plain background, natural light)
- What to avoid

#### Part 2 — Profile Build

**Headline formula:** `[Role] | [Certification] | [Outcome you deliver]`

**Approved headline examples:**
- "Microsoft Power Platform Consultant | PL-200 Certified | Turning business problems into automated solutions"
- "PL-200 Certified Power Platform Consultant | Delivering automated business solutions on the Microsoft stack"

**About Section — 3 paragraphs with 2 examples each:**

Paragraph 1 (who you are): role, certification, DynamX reference
Paragraph 2 (what you delivered): outcome-led evidence statements
Paragraph 3 (what you are looking for): direct, role and company type specific

**Banner:**
- Build in Canva (free)
- Size: 1584 x 396 pixels
- Include role title and Microsoft certification logos from Credly
- No DynamX Institute logo — this is the student's personal professional brand
- Keep content centred (edges crop on mobile)

**Experience section:**
- Title: Power Platform Consultant (Training)
- Company: DynamX Institute
- 3 evidence statement bullets, 2 worked examples provided

**Licences and Certifications:**
- PL-200 first, then PL-900
- Include credential ID and URL

**Skills section:** Removed from framework — not a priority for this cohort

#### Part 3 — Post Templates (3 posts)

Post 1: PL-900 announcement (publish immediately after passing)
Post 2: PL-200 announcement (publish immediately after passing)
Post 3: DynamX Institute graduation (publish on or after final session)

All posts: no "Excited to share" or "Delighted to share" openers. Plain direct openings only. Each includes a placeholder for one genuine personal sentence.

#### Part 4 — Connecting and Outreach

**Who to connect with:** Microsoft partners, Power Platform employers, Microsoft MVPs, DynamX cohort

**Connection messages (2 only — no cold outreach to recruiters, that is DynamX's job):**
- Warm connection: "Hi [First Name], Great to connect. Looking forward to staying in touch. [Your name]"
- Cold connection: "Hi [First Name], I came across your profile and wanted to connect. Hope to stay in touch. [Your name]"

---

## Resume Framework — Full Content Reference

### What a Resume Is For
A resume has one job: get you to the interview. It answers one question: "Does this person have what I need, and can I tell that in 10 seconds?"

The 10-second rule: Employers spend an average of 7 to 10 seconds scanning a resume before deciding whether to read it. The certification, the role title, and the strongest evidence statement must all be visible in the top third of the first page.

### Resume Structure (Section Order)
| # | Section | Content |
|---|---------|---------|
| 1 | Header | Name, location, phone, email, LinkedIn URL |
| 2 | Professional Overview | 4 sentences: role, certification, evidence, what you bring |
| 3 | Certifications | PL-200 first, then PL-900, with credential IDs |
| 4 | Experience | DynamX Institute, 3 evidence statement bullets only |
| 5 | Technical Skills | Two lines only |
| 6 | Education | Qualification, institution, year |

One page only. Two pages signals an inability to edit.

### Professional Summary — 4 Sentences in Order
1. Role + certification + DynamX training reference
2. Strongest evidence statement from LVL 3.1 (outcome-focused)
3. Second differentiating capability: security model, BA skills, or stakeholder communication
4. What they are looking for, direct and specific

**Weak:** "Recent graduate of a Power Platform training. Looking for my first role as a consultant. Hard working and eager to learn."

**Strong:** "PL-200 certified Microsoft Power Platform Functional Consultant with three business systems delivered against real customer briefs through DynamX Institute. Designed and built a multi-surface solution automating a multi-step approval process, reducing processing time from 3 days to same-day. Trained in requirements gathering, Dataverse security model configuration, and stakeholder presentation. Seeking a Power Platform consultant role contributing to client delivery from Day 1."

### Evidence Statement Rules
- Start every bullet with a past-tense action verb: Designed, Built, Delivered, Configured, Automated, Developed, Presented, Implemented
- End every bullet with a business outcome where possible
- Never start with "I"
- No filler bullets about learning or completing training

**Weak:** "Completed a 10-week course learning Power Apps, Power Automate and Dataverse."
**Strong:** "Delivered a LVL 3.1 Power Platform solution against a real customer brief, comprising a Canvas App, Model Driven App, Power Pages portal, and Power Automate flows, reducing a manual approval process from 3 days to same-day turnaround."

### Technical Skills — Two Lines Only
```
Microsoft Platform   Power Apps · Power Automate · Power Pages · Dataverse · Power BI
Consulting           Requirements gathering · Solution design · Stakeholder communication
```

### Common Mistakes
| Mistake | Fix |
|---------|-----|
| Adding a photo (Australia and UK) | No photo on resume. LinkedIn handles this. |
| Listing responsibilities | List achievements with outcomes. |
| Generic objective statement | Specific summary naming role, certification, and outcome. |
| Same resume sent to every application | Adjust summary and top bullet for each application. |
| Two pages | Cut ruthlessly to one page. |
| Em dashes anywhere | Restructure sentence or use comma/colon. |
| Third person in the summary | Implied first person only. No pronouns, no "Alex is..." framing. |

### Cover Letter — When and How
Include only when: the job posting requests one, applying directly to a company, or the role is one particularly wanted.

Never send a generic cover letter. Every cover letter must reference the specific company by name and show you know what they do.

**4-paragraph structure:**
1. Who you are, why this specific company, the role
2. Strongest evidence statement relevant to what they do
3. What you bring beyond technical: consulting mindset, client communication, BA skills
4. Direct close: what you want to happen next and availability

---

## LinkedIn Framework — Full Content Reference

### Headline Examples (approved)
- "Microsoft Power Platform Consultant | PL-200 Certified | Turning business problems into automated solutions"
- "PL-200 Certified Power Platform Consultant | Delivering automated business solutions on the Microsoft stack"

### About Section Examples (approved, 2 per paragraph)

**Paragraph 1 — Example 1:**
"I am a Microsoft Power Platform Functional Consultant with hands-on experience delivering end-to-end solutions using Power Apps, Power Automate, Dataverse, and Power Pages. I hold the PL-200 Microsoft Power Platform Functional Consultant certification and have completed intensive structured consulting training through DynamX Institute, delivering three business systems against real customer briefs."

**Paragraph 1 — Example 2:**
"I am a PL-200 certified Microsoft Power Platform Functional Consultant with experience designing and delivering business systems using Power Apps, Power Automate, Dataverse, and Power Pages. I completed consulting training through DynamX Institute, where I delivered three complete business systems against real customer briefs."

**Paragraph 2 — Example 1:**
"In my most recent project I designed and delivered a Power Platform solution that automated a multi-step approval process for a logistics business, reducing processing time from 3 days to same-day. I also built a Model Driven App with a configured Dataverse security model to manage role-based access across three departments."

**Paragraph 2 — Example 2:**
"Across three projects I delivered solutions including a Canvas App automating a staff onboarding process, a Model Driven App managing client case records across multiple departments, and a Power Pages portal giving external users secure access to submit and track requests."

**Paragraph 3 — Example 1:**
"I am looking for a Power Platform consultant role where I can contribute to client delivery from Day 1. I bring a structured approach to requirements gathering, a working knowledge of the full Power Platform stack, and the ability to present solutions in business language to non-technical stakeholders."

**Paragraph 3 — Example 2:**
"I am actively seeking a Power Platform consultant role with a Microsoft partner or consultancy. I am ready to contribute to client delivery from Day 1 and bring hands-on experience across the full Power Platform stack alongside training in requirements gathering and stakeholder communication."

### Experience Section Examples (approved, 2 sets)

**Example 1:**
- Delivered a LVL 3.1 Power Platform solution against a real customer brief, comprising a Canvas App, Model Driven App, Power Pages portal, and Power Automate flows, reducing a manual approval process from three days to same-day turnaround.
- Configured a Dataverse security model including Business Units, Teams, and Security Roles for a three-department environment, ensuring complete role-based data separation.
- Applied Business Analyst techniques including stakeholder interviews, requirements gathering, and user story writing to scope and design each solution before build commenced.

**Example 2:**
- Designed and built a Canvas App automating a staff onboarding process, eliminating manual data entry across three departments and reducing onboarding administration time by two days.
- Developed a Model Driven App to manage client case records, with automated Power Automate flows routing cases to the correct team based on category and priority.
- Presented solution designs and live demos to a panel of stakeholders, incorporating structured feedback across multiple review cycles to refine and improve each delivery.

### Post Templates (approved, final versions)

**Post 1 — PL-900:**
```
Passed the Microsoft PL-900: Power Platform Fundamentals certification.

The PL-900 covers the full Power Platform ecosystem: Power Apps, Power Automate,
Power BI, Power Pages, and Dataverse. [Add one genuine sentence about what you
found most useful or surprising.]

This is the first of two Microsoft certifications I am completing as part of the
DynamX Institute consulting training. Next up is the PL-200: Power Platform
Functional Consultant Associate.

#MicrosoftCertified #PowerPlatform #PL900 #DynamXInstitute #PowerPlatformConsultant
```

**Post 2 — PL-200:**
```
Passed the Microsoft PL-200: Power Platform Functional Consultant Associate certification.

The PL-200 is a scenario-based exam testing decision-making across the full Power Platform:
Dataverse configuration, process automation, Power Apps design, analytics, and integration.
[Add one genuine sentence about what you found most challenging or what surprised you.]

This certification sits alongside three complete business systems delivered through DynamX
Institute consulting training. I am now actively looking for Power Platform consultant roles.

If you work in the Power Platform space or know someone who does, I would love to connect.

#MicrosoftCertified #PL200 #PowerPlatform #PowerPlatformConsultant #DynamXInstitute
```

**Post 3 — Graduation:**
```
Ten weeks ago I started the DynamX Institute consulting training. Today I graduated.

Here is what that ten weeks involved:
- Three complete business systems delivered against real customer briefs
- PL-900 and PL-200 Microsoft certifications achieved
- Business analyst training: requirements gathering, user stories, solution design
- Live demo and mock interview preparation
- [Add anything else personally significant]

The training was not about watching tutorials. It was about delivering real work,
getting structured feedback, and doing it again.

[Add one personal sentence about what you are most proud of or what shifted for you.]

I am now actively looking for Power Platform consultant roles. If you are hiring or
know someone who is, I would love to connect.

#PowerPlatform #PL200 #MicrosoftConsultant #DynamXInstitute #OpenToWork
```

---

## Key Decisions Made in This Thread

- **No retail job on resume.** Casual retail work does not strengthen a Power Platform consultant application and dilutes the signal of the DynamX evidence statements.
- **No personality section on resume.** A resume is a structured evidence document. Character comes through in the quality of evidence statements and in the LinkedIn About section.
- **Skills section removed from LinkedIn framework.** No longer a priority for this cohort. Certifications and evidence statements do the heavy lifting.
- **No DynamX logo on LinkedIn banner.** The banner is the student's personal professional brand, not a DynamX advertisement.
- **No cold outreach to recruiters.** Outreach to recruiters is DynamX's job. Students send warm and cold connection requests only, with simple plain messages.
- **LVL 3.1 post removed from LinkedIn framework.** Only 3 posts remain: PL-900, PL-200, Graduation.
- **Third person on resume is wrong.** Resumes use implied first person. No pronouns, no "Alex is..." framing. Third person is for professional bios and speaker profiles.
- **"Program" is never used for DynamX.** It is always "training", "consulting training", or "DynamX Institute".
- **Experience title is "Power Platform Consultant (Training)".** Never "Program".
- **Resume section label is "Professional Overview"** (matching the final template). Not "Professional Summary".

---

## What to Build Next — Facilitation Guide

The next thread will build a **Facilitation Guide** for DynamX trainers delivering the LinkedIn and resume session with students.

### What the facilitation guide should cover:
- Session structure and timing
- How to introduce each document to students
- Common student questions and how to answer them
- How to review and give feedback on student resumes and LinkedIn profiles
- What good looks like vs what needs work (trainer reference, not student-facing)
- How to run the evidence statement writing exercise
- How to run the LinkedIn profile build session
- Milestones and checkpoints: what students should have completed by when

### Tone and format:
- Written for trainers, not students
- Direct and practical
- Structured as a session plan with notes, not a script

---

## Notes for the New Thread

- All three student-facing documents are complete and locked in
- The resume template design is the Isaac Wright two-column layout with charcoal/steel blue colours
- The facilitation guide is the next deliverable
- Build using Node.js `docx` package, same colour scheme as the three completed documents
- Validate with: `python /mnt/skills/public/docx/scripts/office/validate.py`
- Colour palette: Header `3A3838`, Section bars `22779D`, Accent `085296`, Light tint `D9EAF3`, Body `333333`
- Font: Arial throughout
- Footer: "DynamX Institute — [Document Name] | Page X" right-aligned

# Content Requirements Checklist: LinkedIn Profile Swap

**Purpose**: Validate that requirements for a full identity and content swap from the named LinkedIn profile are complete, clear, consistent, and measurable
**Created**: 2026-10-09
**Feature**: [spec.md](../spec.md)
**Depth**: Standard
**Audience**: Author, before implementation
**Source**: https://pk.linkedin.com/in/moiz-jawad
**Scope decision**: Full swap of name, headline, about, location, experience, education, skills, certifications, projects, awards, contact, and profile links

**Ownership**: `[x]` means the reviewer determined that the requirements-quality criterion is satisfied. It does not mean implementation is complete. New items stay unchecked until the reviewer marks them. `/speckit-implement` reads checklist state but does not modify markers.

## Requirement Completeness

- [ ] CHK001 - Does a specification exist that lists every portfolio identity and content field to be replaced from the LinkedIn profile? [Completeness, Gap]
- [ ] CHK002 - Are requirements defined for name, headline, about, location, experience, education, skills, certifications, projects, awards, contact, and profile links? [Completeness, Gap]
- [ ] CHK003 - Does the spec require an inventory of every public section on the source profile, including sections the current page does not already show? [Completeness, Gap]
- [ ] CHK004 - Are experience entries specified as a required content set, including role, organization, dates, location, and description wherever the profile provides them? [Completeness, Gap]
- [ ] CHK005 - Are requirements defined for profile photo, featured media, languages, volunteer work, publications, courses, and recommendations when those sections exist on the source profile? [Completeness, Gap]
- [ ] CHK006 - Does the spec require replacement of the previous persona's facts on every surface that states them, including brand name, legal name, education, location, awards, skills, expertise descriptions, and project copy? [Completeness, Gap]
- [ ] CHK007 - Is a requirement and acceptance-criteria ID scheme established so each LinkedIn field can be traced to a requirement? [Traceability, Gap]

## Requirement Clarity

- [ ] CHK008 - Is "every single detail" defined as a field list plus a rule for verbatim text versus allowed shortening? [Clarity, Ambiguity, Gap]
- [ ] CHK009 - Are date, location, and name formats specified, including partial dates and entries with more than one location? [Clarity, Gap]
- [ ] CHK010 - Is the canonical profile URL specified, including whether the `pk.linkedin.com` URL and any `www.linkedin.com` equivalent are the same source? [Clarity, Assumption, Gap]
- [ ] CHK011 - Are headline, about, and role lines distinguished so each visible role string has one required source field? [Clarity, Gap]
- [ ] CHK012 - Are project requirements specific about which profile project or featured fields supply title, description, and tags? [Clarity, Gap]
- [ ] CHK013 - Are contact requirements specific about which email, phone, location, and social URLs must come from the profile, and which contact-form labels stay generic? [Clarity, Gap]

## Requirement Consistency

- [ ] CHK014 - Do requirements require one identity across every surface that shows a name, including the preloader, navigation, hero, about text, and footer copyright? [Consistency, Gap]
- [ ] CHK015 - Are skill and expertise requirements aligned so the same profile skills are not given conflicting categories or claims? [Consistency, Gap]
- [ ] CHK016 - Are award and certification requirements consistent between milestone copy and any other accolade copy? [Consistency, Gap]
- [ ] CHK017 - Are profile-link requirements consistent so placeholder destinations cannot remain beside a required LinkedIn URL? [Consistency, Gap]

## Acceptance Criteria Quality

- [ ] CHK018 - Can a reviewer compare each required field to the source profile and decide pass or fail without interpretation? [Measurability, Gap]
- [ ] CHK019 - Is "full swap" measurable as an explicit list of previous-persona facts that must no longer appear? [Measurability, Gap]
- [ ] CHK020 - Are acceptance criteria defined for experience order, education order, and how many entries must appear when the profile has more entries than the current layout? [Acceptance Criteria, Gap]
- [ ] CHK021 - Does each content requirement state the source field, the destination surface, and the equality rule? [Acceptance Criteria, Gap]

## Scenario Coverage

- [ ] CHK022 - Are primary-flow requirements defined for a complete public profile that includes experience, education, skills, certifications, projects, awards, contact, and links? [Coverage, Gap]
- [ ] CHK023 - Are alternate requirements defined when the profile contains a section the current page has no place for? [Coverage, Gap]
- [ ] CHK024 - Are requirements defined for Netflix labels and episode framing that are not profile facts, so those labels are either explicitly kept or explicitly replaced? [Coverage, Ambiguity, Gap]

## Edge Case Coverage

- [ ] CHK025 - Is behavior specified when a required profile section is empty, such as no about text, no projects, no photo, or no public email? [Edge Case, Gap]
- [ ] CHK026 - Is behavior specified when an experience or education entry is missing dates, a description, or a location? [Edge Case, Gap]
- [ ] CHK027 - Are requirements defined for very long about text, large skill lists, or more experience entries than the current copy length allows? [Edge Case, Gap]
- [ ] CHK028 - Is fallback behavior specified when the profile photo is absent? [Edge Case, Gap]

## Non-Functional Requirements

- [ ] CHK029 - Are accuracy requirements defined so stated facts match the profile as of a specified capture time? [Clarity, Gap]
- [ ] CHK030 - Are privacy requirements defined for contact details the profile does not show publicly? [Coverage, Gap]
- [ ] CHK031 - Are accessibility requirements specified for replaced text, including alternative text if the portrait is replaced? [Gap]

## Dependencies & Assumptions

- [ ] CHK032 - Is the public LinkedIn profile documented as the only source of truth, with no permission to invent employers, degrees, skills, or awards? [Assumption, Gap]
- [ ] CHK033 - Are dependencies documented for reading https://pk.linkedin.com/in/moiz-jawad, including what the spec requires when that page cannot be retrieved? [Dependency, Gap]
- [ ] CHK034 - Is it stated whether cinematic structure may remain only where it does not assert biographical facts? [Assumption, Ambiguity, Gap]

## Ambiguities & Conflicts

- [ ] CHK035 - Does the spec resolve whether endorsement counts, recommendation text, and follower or connection counts are inside "every single detail"? [Ambiguity, Gap]
- [ ] CHK036 - Does the spec resolve the conflict between short cinematic blurbs and full LinkedIn descriptions by saying which source wins? [Conflict, Gap]
- [ ] CHK037 - Are exception and recovery requirements defined when the source profile is only partly visible or later changes? [Exception Flow, Gap]

## Notes

- This file was created new. No earlier checklist items were present.
- `.specify/scripts/bash/check-prerequisites.sh` is not in this repo, and `spec.md` does not exist yet. Items point at that gap rather than at specification sections.
- Q1 was answered as a full identity and content swap. Q2 and Q3 were not answered. Depth is Standard and the actor is the author before implementation. Empty, private, and unreachable profile data is tested as unspecified behavior, not as a chosen product rule.
- The source profile URL returned HTTP 500 during checklist generation, so this list does not record biographical facts from the account.
- `/speckit-implement` reads checklist state but does not modify markers.

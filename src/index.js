// falllegal SDK · UK law engine + matter management primitives for SRA-regulated firms.
// REAL extraction from single-file falllegal shell (index.html). Public-safe · MIT.
// Research/informational only · not legal advice · not regulatory submission.

export const DISCLAIMER = 'Research / informational only. Not legal advice. Not a regulatory submission. Verify against primary sources.';

// ── 12 practice areas (verbatim) ──────────────────────────────────────────────
export const PRACTICE_AREAS = [
  {id:'civil-litigation',name:'Civil Litigation',statutes:['Limitation Act 1980','Civil Procedure Rules','Senior Courts Act 1981']},
  {id:'conveyancing',name:'Conveyancing',statutes:['Land Registration Act 2002','Law of Property Act 1925','LPMPA 1989']},
  {id:'family',name:'Family',statutes:['Family Law Act 1996','Matrimonial Causes Act 1973','Children Act 1989']},
  {id:'crime',name:'Criminal',statutes:['PACE 1984','Criminal Justice Act 2003','Bail Act 1976']},
  {id:'wills-probate',name:'Wills & Probate',statutes:['Wills Act 1837','Administration of Estates Act 1925','Inheritance Act 1975']},
  {id:'employment',name:'Employment',statutes:['Employment Rights Act 1996','Equality Act 2010','TUPE 2006']},
  {id:'commercial',name:'Commercial',statutes:['Companies Act 2006','Sale of Goods Act 1979','UCTA 1977']},
  {id:'immigration',name:'Immigration',statutes:['Immigration Act 1971','Nationality Borders Act 2022','Immigration Rules HC 395']},
  {id:'landlord-tenant',name:'Landlord & Tenant',statutes:['Housing Act 1988','Landlord & Tenant Act 1985','Housing Act 2004']},
  {id:'personal-injury',name:'Personal Injury',statutes:['Limitation Act 1980 s.11','LASPO 2012','Civil Liability Act 2018']},
  {id:'clinical-neg',name:'Clinical Negligence',statutes:['Limitation Act 1980 s.11','Bolam test','Montgomery v Lanarkshire']},
  {id:'other',name:'Other',statutes:[]}
];

// ── T0 offline Q&A rules (verbatim) ───────────────────────────────────────────
export const T0_RULES = [
  {q:'PI limitation period?',a:'Personal injury claims: 3 years from date of injury OR date of knowledge (Limitation Act 1980 s.11). Court has discretion under s.33 to disapply for equitable reasons. Children: time runs from 18th birthday. Mental incapacity: time runs from when capacity restored. Latent disease: knowledge often years after exposure (eg mesothelioma). Always check if claimant was minor / lacked capacity / acquired knowledge late.'},
  {q:'CFA vs DBA?',a:'CFA (Conditional Fee Agreement): "no win, no fee" with success fee uplift (max 100% of base costs, capped at 25% of damages excl. future care in PI). Governed by Courts & Legal Services Act 1990 s.58, CFA Order 2013. DBA (Damages-Based Agreement): payment is % of damages recovered (50% civil, 35% employment, 25% PI). DBA Regs 2013. CFA success fee recoverable from client only since LASPO 2012. Hybrid CFA/DBA unenforceable: Zuberi v Lexlaw [2021] EWCA Civ 16.'},
  {q:'SRA conduct rules?',a:'SRA Standards & Regulations 2019. Seven Principles: uphold rule of law, public trust, independence, honesty, integrity, equality, best interests of client. Code of Conduct for Solicitors. Code for Firms. Accounts Rules (client money). Reg 13.5: 6-year file retention. COLP / COFA mandatory per firm. Annual practising certificate renewal. 16hrs CPD per year. Indemnity insurance £2m/£3m minimum per claim.'},
  {q:'Bolam test?',a:'Bolam v Friern Hospital Management Committee [1957] 1 WLR 582: a professional is not negligent if their action accorded with a practice accepted as proper by a responsible body of professional opinion. Modified by Bolitho v City & Hackney HA [1998] AC 232: the body of opinion must withstand logical analysis. For consent: superseded by Montgomery v Lanarkshire HB [2015] UKSC 11 — patient-centred test of material risk.'},
  {q:'Conveyancing protocol?',a:'Law Society Conveyancing Protocol 2019 (residential). Steps: client onboarding + ID, contract pack, searches (local, water/drainage, environmental, chancel), enquiries, mortgage offer, exchange (10% deposit, contract binding), completion (balance + keys), SDLT return within 14 days, Land Registry application within priority period. CQS accreditation for lenders. SRA Warning Notice on dubious investment schemes.'},
  {q:'Wasted costs orders?',a:'SCA 1981 s.51(6); CPR 46.8. Court may order legal representative personally liable for wasted costs where conduct was improper, unreasonable or negligent. Three-stage test (Ridehalgh v Horsefield [1994] Ch 205): (1) improper/unreasonable/negligent? (2) caused waste? (3) just? High threshold; show cause hearing required. Privilege may need waiving by client to defend.'},
  {q:'Inheritance Act 1975 claims?',a:'I(PFD)A 1975: reasonable financial provision claim against estate. Eligible: spouse/civil partner, former spouse not remarried, cohabitant of 2+yrs, child of deceased, treated-as-child, maintained-by. Spouse standard: what is reasonable in all circumstances. Others: what is needed for maintenance. Time limit: 6 months from grant of representation (court can extend, see Cowan v Foreman [2019] EWCA Civ 1336). Ilott v Mitson [2017] UKSC 17 confirms testamentary freedom.'},
  {q:'Section 21 vs Section 8?',a:'Housing Act 1988. Section 21: "no fault" notice for ASTs — landlord can recover possession after fixed term without giving reason. 2 months notice. Restrictions: must have protected deposit (TDS Regs), gas safety cert served, EPC served, How-to-Rent guide given. Renters Reform Bill abolishes s.21. Section 8: fault-based — discretionary or mandatory grounds (Sch.2). Ground 8 (2+ months rent arrears) mandatory. 14 days/2 weeks notice depending on ground. Court hearing required.'},
  {q:'Equality Act 2010?',a:'EA 2010: nine protected characteristics (age, disability, gender reassignment, marriage/CP, pregnancy/maternity, race, religion/belief, sex, sexual orientation). Prohibited conduct: direct discrimination (s.13), indirect (s.19), harassment (s.26), victimisation (s.27), failure to make reasonable adjustments (s.20, disability only). Burden shifts to respondent under s.136 once prima facie case shown. ET claim time limit: 3 months less 1 day.'},
  {q:'ET time limits?',a:'Employment Tribunal claims (ERA 1996 s.111 etc.): unfair dismissal — 3 months less 1 day from EDT; discrimination — 3 months less 1 day from act complained of (continuing acts treated as ending on last act); equal pay — 6 months from end of employment; redundancy pay — 6 months. ACAS Early Conciliation MANDATORY before issuing — extends time by up to 1 month. Just-and-equitable extension only for discrimination; not unfair dismissal (only "not reasonably practicable").'},
  {q:'Norwich Pharmacal orders?',a:'Norwich Pharmacal v Customs & Excise [1974] AC 133. Court can order disclosure from a third party innocently mixed up in wrongdoing, to identify wrongdoer. Three-stage test: (1) arguable wrong has occurred; (2) order necessary to enable claimant to pursue action; (3) respondent more than mere witness. Used in IP infringement, defamation, fraud tracing. Not against journalists if source protected (s.10 Contempt of Court Act 1981). Costs usually paid by applicant.'},
  {q:'CPR 31 disclosure?',a:'CPR 31 (now largely replaced by PD 51U Disclosure Pilot in B&PCs and DBL Disclosure Rules from 2022). Standard disclosure: documents party relies on + documents which adversely affect own/another party case + documents required by PD/court. Continuing obligation. Privilege exceptions: legal advice privilege, litigation privilege, without prejudice, common interest. Disclosure list verified by statement of truth. Specific disclosure: CPR 31.12 application.'},
  {q:'Without prejudice rule?',a:'Genuine settlement communications inadmissible to prove liability. Established Cutts v Head [1984] Ch 290. Requires: (1) existing dispute; (2) genuine attempt to settle. "Without prejudice save as to costs" (Calderbank): admissible on costs only. Exceptions (Unilever v P&G [2000] 1 WLR 2436): unambiguous impropriety, threats, perjury evidence, rectification, estoppel. WP applies orally too. Mark all settlement correspondence clearly.'},
  {q:'Privilege types?',a:'Legal advice privilege: communications between client & lawyer for purpose of giving/receiving legal advice (Three Rivers (No.6) [2004] UKHL 48 — narrow "client" definition in corporates — see SFO v ENRC [2018] EWCA Civ 2006). Litigation privilege: communications with lawyer OR third party where (a) litigation reasonably contemplated, (b) dominant purpose. Common interest privilege: shared advice between aligned parties. Joint privilege: co-clients. Without prejudice: separate doctrine. Privilege can be waived expressly or by reference.'}
];

// ── 30 strategic weaves (verbatim) ────────────────────────────────────────────
export const WEAVES = [
  {id:'W001',name:'The Limitation Shield',archetype:'PI claim served on day 1095 from injury — defendant pleads time-bar',agents:['PROCEDURE','LIBERTY'],move:'Plead Limitation Act 1980 s.11 + s.14 date-of-knowledge; if late, invoke s.33 equitable discretion citing prejudice balance.',authorities:['Limitation Act 1980 ss.11, 14, 33','A v Hoare [2008] UKHL 6','Cain v Francis [2008] EWCA Civ 1451'],opposition_move:'Defendant says claimant knew of injury & cause from outset.',counter:'Distinguish actual knowledge from constructive — s.14(3) requires it be reasonable to seek advice; Spargo v North Essex DHA [1997] 8 Med LR 125.',why_it_wins:'Even out-of-time, s.33 balances prejudice — courts often allow where defendant insured and evidence preserved.',example_case:'Cain v Francis (s.33 discretion exercised in claimant favour).'},
  {id:'W002',name:'The Bolitho Override',archetype:'Clinical negligence — defendant relies on Bolam body of opinion',agents:['EQUITY','PROCEDURE'],move:'Concede Bolam, then deploy Bolitho — challenge the body of opinion as logically indefensible.',authorities:['Bolam [1957] 1 WLR 582','Bolitho v City & Hackney HA [1998] AC 232','Montgomery v Lanarkshire [2015] UKSC 11'],opposition_move:'Expert testimony from senior peer attesting practice was within standard.',counter:'Cross-examine on weighing of risks — if expert cannot articulate logical basis, opinion falls.',why_it_wins:'Bolitho permits court to reject expert opinion where it does not stand up to logical analysis.',example_case:'Bolitho itself (HL applied test even though it failed on facts).'},
  {id:'W003',name:'The Montgomery Consent',archetype:'Patient not warned of material risk that materialised',agents:['EQUITY','LIBERTY'],move:'Plead failure to warn of "material risk" — patient-centred test, not body of medical opinion.',authorities:['Montgomery v Lanarkshire HB [2015] UKSC 11','Chester v Afshar [2004] UKHL 41','Duce v Worcestershire Acute Hospitals [2018] EWCA Civ 1307'],opposition_move:'Doctor says risk was too remote to mention.',counter:'Material risk = risk to which reasonable person in patient position would attach significance, OR doctor aware this patient would attach significance. Subjective limb defeats remoteness.',why_it_wins:'Montgomery overruled Sidaway — consent now patient-autonomy not Bolam.',example_case:'Montgomery (1-in-9-10% shoulder dystocia risk material).'},
  {id:'W004',name:'The Section 33 Mercy',archetype:'PI claim 4+ years stale, defendant pleads strikeout',agents:['PROCEDURE','EQUITY'],move:'s.33 application — weigh prejudice to claimant of refusal vs prejudice to defendant of allowing.',authorities:['Limitation Act 1980 s.33','Cain v Francis [2008]','Davidson v Aegis Defence Services [2013] EWCA Civ 1586'],opposition_move:'Defence prejudiced — witnesses untraceable, memories faded.',counter:'Insurance preserves evidence; medical records mandatory retention 8yrs; contemporaneous documents survive — defendant cannot show real forensic prejudice.',why_it_wins:'Section 33 expressly invites broad equity; reason for delay only one factor.',example_case:'AB v Ministry of Defence [2012] UKSC 9 (s.33 principle clear).'},
  {id:'W005',name:'The Conflict Wall',archetype:'Sister firm acted for opposing party — instruct fresh',agents:['GUILD','EQUITY'],move:'Information barrier built before instruction — Bolkiah test compliance.',authorities:['Prince Jefri Bolkiah v KPMG [1999] 2 AC 222','SRA Code of Conduct Pt 6','SRA Standards & Regs 2019'],opposition_move:'Former client seeks injunction to restrain.',counter:'Demonstrate effective information barrier: physical, electronic, signed undertakings, no client crossover, fee splits.',why_it_wins:'Bolkiah requires real and substantial risk of disclosure; effective Chinese wall rebuts it.',example_case:'Re Z [2009] EWHC 3621 (Ch) — barrier upheld.'},
  {id:'W006',name:'The CFA Lifeline',archetype:'Client cannot fund litigation — no win, no fee needed',agents:['PROCEDURE','LIBERTY'],move:'Draft compliant CFA: signed before work, base costs + success fee uplift up to 100% of base; cap on damages.',authorities:['Courts & Legal Services Act 1990 s.58','CFA Order 2013','LASPO 2012'],opposition_move:'Costs judge says CFA unenforceable — non-compliant.',counter:'Hollins v Russell [2003] EWCA Civ 718 — only material breach renders unenforceable; cure trivial defects.',why_it_wins:'CFAs survive technical errors unless integrity of agreement compromised.',example_case:'Hollins v Russell (4 conjoined appeals — most CFAs upheld).'},
  {id:'W007',name:'The Part 36 Trap',archetype:'Want costs leverage post-trial',agents:['PROCEDURE'],move:'Serve Part 36 offer just above expected award — if not beaten, costs uplift + indemnity costs.',authorities:['CPR Part 36','Lilleyman v Lilleyman [2012] EWHC 1056','OMV Petrom v Glencore Int [2017] EWCA Civ 195'],opposition_move:'Offer pitched too high — rejected, court refuses 36.17 consequences.',counter:'Withdraw and reissue lower; tactical timing — 21-day relevant period before trial window.',why_it_wins:'Part 36 is self-contained code — court has limited discretion to disapply.',example_case:'OMV v Glencore — additional amounts, enhanced interest awarded.'},
  {id:'W008',name:'The Constructive Dismissal',archetype:'Employee resigns after fundamental breach by employer',agents:['LIBERTY','EQUITY'],move:'Plead repudiatory breach under Western Excavating test — resignation in response, not delayed.',authorities:['Employment Rights Act 1996 s.95(1)(c)','Western Excavating v Sharp [1978] ICR 221','Tullett Prebon v BGC Brokers [2011] EWCA Civ 131'],opposition_move:'Affirmation — employee continued working too long.',counter:'Reasonable time to investigate / seek advice / collect evidence does not affirm; objection raised contemporaneously.',why_it_wins:'Trust & confidence implied term is fundamental — any serious breach repudiates.',example_case:'Malik v BCCI [1997] UKHL 23 (stigma damages — confirms breadth of T&C duty).'},
  {id:'W009',name:'The TUPE Transfer',archetype:'Business sold — staff transferring object to changed terms',agents:['LIBERTY','GUILD'],move:'TUPE 2006 reg.4 auto-transfer; reg.4(4) bars changes whose sole/principal reason is the transfer.',authorities:['TUPE Regs 2006','Foreningen af Arbejdsledere v Daddys Dance Hall C-324/86','Spaceright Europe v Baillavoine [2011] EWCA Civ 1565'],opposition_move:'Changes alleged ETO reason (economic, technical, organisational).',counter:'ETO must entail changes in workforce — pure harmonisation not ETO; Wilson v St Helens BC [1998] UKHL 37.',why_it_wins:'TUPE protections survive unless genuine workforce change demonstrated.',example_case:'Power v Regent Security Services [2007] EWCA Civ 1188.'},
  {id:'W010',name:'The Inheritance Provision',archetype:'Adult child / cohabitant excluded from will',agents:['HEARTH','EQUITY'],move:'I(PFD)A 1975 claim within 6 months of grant; show reasonable provision not made.',authorities:['Inheritance (Provision for Family and Dependants) Act 1975','Ilott v Mitson [2017] UKSC 17','Cowan v Foreman [2019] EWCA Civ 1336'],opposition_move:'Testator had clear reasons; testamentary freedom intact.',counter:'Reasons are factor but not determinative; objective assessment of all circumstances; maintenance standard for non-spouse.',why_it_wins:'Court has wide discretion s.3 factors; testamentary freedom subject to statutory adjustment.',example_case:'Ilott — Court of Appeal expansion narrowed by SC but jurisdiction confirmed.'},
  {id:'W011',name:'The Section 21 Defence',archetype:'Tenant served s.21 — must defend',agents:['LIBERTY','HEARTH'],move:'Check formal validity: TDS protection within 30 days, prescribed info served, gas safety cert pre-occupation, EPC, How-to-Rent guide.',authorities:['Housing Act 1988 s.21','Deregulation Act 2015','Trecarrell House Ltd v Rouncefield [2020] EWCA Civ 760'],opposition_move:'Landlord cures defects post-notice.',counter:'Some defects cannot be cured (gas safety pre-occupation per Trecarrell); raise retaliatory eviction (Deregulation Act 2015 s.33).',why_it_wins:'s.21 is rigid procedural code — any non-compliance invalidates notice.',example_case:'Trecarrell — strict requirement for gas safety cert pre-occupancy.'},
  {id:'W012',name:'The Direct Discrimination',archetype:'Employee less favourably treated because of protected characteristic',agents:['LIBERTY','EQUITY'],move:'EA 2010 s.13: identify protected characteristic, comparator (actual or hypothetical), less favourable treatment, causation.',authorities:['Equality Act 2010 s.13','Shamoon v RUC [2003] UKHL 11','Nagarajan v LRT [1999] ICR 877'],opposition_move:'Treatment for legitimate reason unconnected to characteristic.',counter:'Reverse burden under s.136: once prima facie case, employer must prove non-discriminatory reason; speculation insufficient.',why_it_wins:'Burden shifting captures unconscious bias and post-hoc rationalisation.',example_case:'Igen v Wong [2005] EWCA Civ 142 — burden shifting framework.'},
  {id:'W013',name:'The Without Prejudice Veil',archetype:'Opposing party tries to put settlement communications in evidence',agents:['PROCEDURE'],move:'Object — WP communications inadmissible to prove liability.',authorities:['Cutts v Head [1984] Ch 290','Unilever v P&G [2000] 1 WLR 2436','Oceanbulk Shipping v TMT [2010] UKSC 44'],opposition_move:'Argue exception: unambiguous impropriety / threat / rectification.',counter:'Exceptions narrow — Unilever lists them; impropriety must be unequivocal; mere robust negotiation not enough.',why_it_wins:'Public policy favouring settlement is bedrock.',example_case:'Unilever (defining exceptions).'},
  {id:'W014',name:'The Privilege Citadel',archetype:'Disclosure sought of solicitor-client communications',agents:['PROCEDURE','GUILD'],move:'Claim legal advice privilege (LAP) and/or litigation privilege (LP); withhold from inspection.',authorities:['Three Rivers (No.6) [2004] UKHL 48','SFO v ENRC [2018] EWCA Civ 2006','Waugh v BRB [1980] AC 521'],opposition_move:'Argue iniquity exception; or that document is not "for purpose of legal advice".',counter:'Three Rivers narrows "client" in corporate context but ENRC restored broader litigation privilege; dominant purpose test.',why_it_wins:'Privilege is a substantive right (R v Derby Magistrates ex p B [1996] AC 487).',example_case:'SFO v ENRC (privilege upheld for ENRC interview notes).'},
  {id:'W015',name:'The Norwich Pharmacal',archetype:'Need to identify anonymous wrongdoer',agents:['PROCEDURE','EQUITY'],move:'Apply to court for third-party disclosure order — three-stage Norwich Pharmacal test.',authorities:['Norwich Pharmacal v C&E [1974] AC 133','Mitsui v Nexen Petroleum [2005] EWHC 625','Ramilos Trading v Buyanovsky [2016] EWHC 3175'],opposition_move:'Third party says: confidentiality, not "more than mere witness".',counter:'Mixed-up-in-wrongdoing satisfied broadly — eg ISP carrying tortious content; necessity outweighs confidentiality if no other route.',why_it_wins:'Equitable jurisdiction to right wrongs survives data protection objection.',example_case:'Totalise v Motley Fool [2001] EWCA Civ 1897.'},
  {id:'W016',name:'The Wasted Costs Sword',archetype:'Opponents lawyer pursued hopeless / improper case',agents:['PROCEDURE','GUILD'],move:'Apply for wasted costs order under SCA 1981 s.51(6) post-conclusion — Ridehalgh test.',authorities:['Senior Courts Act 1981 s.51(6)','CPR 46.8','Ridehalgh v Horsefield [1994] Ch 205'],opposition_move:'Privilege not waived — lawyer cannot defend.',counter:'Court may proceed if can be satisfied to relevant standard without; or client may waive selectively.',why_it_wins:'Acts as discipline on professional conduct; survives privilege issues at threshold stage.',example_case:'Ridehalgh itself (test laid down).'},
  {id:'W017',name:'The Conveyancing Survival',archetype:'Buyers expectations not met post-completion',agents:['HEARTH','EQUITY'],move:'Pre-contract enquiries (Standard Form CPSE/TA6) responses misrepresented — claim under Misrepresentation Act 1967.',authorities:['Misrepresentation Act 1967','William Sindall v Cambridgeshire CC [1994] 1 WLR 1016','First Tower Trustees v CDS [2018] EWCA Civ 1396'],opposition_move:'Reliance on contract entire-agreement clause; non-reliance clause.',counter:'First Tower: non-reliance clauses subject to UCTA reasonableness; cannot exclude liability for fraudulent misrepresentation (HIH Casualty).',why_it_wins:'Real estate enquiry responses survive boilerplate; equity of misrepresentation strong.',example_case:'First Tower (non-reliance clause failed reasonableness).'},
  {id:'W018',name:'The Bail Application',archetype:'Defendant charged — police remand vs bail',agents:['CROWN','LIBERTY'],move:'Bail Act 1976 — presumption of bail; rebut prosecution objections (fail to surrender, commit offence, interfere with witnesses).',authorities:['Bail Act 1976 Sch.1','HRA 1998 Art.5','CrimPR Part 14'],opposition_move:'Crown: substantial grounds for objection.',counter:'Offer conditions: surety, security, address, curfew, electronic monitoring, no-contact, surrender of passport — proportionate.',why_it_wins:'Conditional bail proportionate; remand exceptional given Art.5.',example_case:'Caballero v UK (2000) 30 EHRR 643 (mandatory remand incompatible).'},
  {id:'W019',name:'The Sentence Mitigation',archetype:'Defendant pleading guilty — minimise sentence',agents:['CROWN','EQUITY'],move:'Deploy Sentencing Council guidelines; identify culpability/harm; maximise credit for plea (max 1/3 if at PTPH).',authorities:['Sentencing Act 2020','Sentencing Council Guidelines','R v Caley [2012] EWCA Crim 2821'],opposition_move:'Crown highlights aggravating features.',counter:'Match aggravation point-for-point with mitigation: cooperation, remorse, antecedents, personal mitigation, age, mental health.',why_it_wins:'Structured guidelines reward thorough mitigation; appeal lies if outside range.',example_case:'R v Manning [2020] EWCA Crim 592 (COVID-era custodial mitigation).'},
  {id:'W020',name:'The Children Welfare Paramount',archetype:'Family dispute over childrens arrangements',agents:['HEARTH','EQUITY'],move:'Apply s.1 Children Act 1989 welfare checklist; childs welfare paramount.',authorities:['Children Act 1989 s.1','Re G (Children) [2006] UKHL 43','Re A (A Child) [2013] EWCA Civ 1104'],opposition_move:'Status quo argument: child settled with one parent.',counter:'Status quo only one factor in checklist; long-term welfare; risk of harm; ascertainable wishes; capability of parents.',why_it_wins:'Statutory checklist forces evidence-based not assumption-based determination.',example_case:'Re G (residence between civil partners) — parenthood not determinative.'},
  {id:'W021',name:'The Financial Order on Divorce',archetype:'Divorce finances — needs vs sharing principle',agents:['HEARTH','EQUITY'],move:'MCA 1973 s.25 factors; apply needs, sharing, compensation per White v White.',authorities:['Matrimonial Causes Act 1973 s.25','White v White [2000] UKHL 54','Miller; McFarlane [2006] UKHL 24'],opposition_move:'Argue special contribution / pre-marital assets / inherited wealth as non-matrimonial.',counter:'Non-matrimonial property only ring-fenced where needs allow; long marriages dilute origin.',why_it_wins:'No discrimination between earner & homemaker; equal sharing yardstick.',example_case:'White v White (departure from reasonable requirements approach).'},
  {id:'W022',name:'The Immigration Article 8',archetype:'Refusal of leave — claimant has family / private life in UK',agents:['LIBERTY','EQUITY'],move:'Plead ECHR Art.8 disproportionate; Immigration Rules paras 276ADE / Appendix FM as starting point.',authorities:['Human Rights Act 1998 Art.8','Agyarko [2017] UKSC 11','Hesham Ali [2016] UKSC 60'],opposition_move:'Public interest in immigration control; s.117B NIAA 2002 considerations.',counter:'Best interests of child primary consideration (ZH (Tanzania)); long residence; integration; insurmountable obstacles.',why_it_wins:'Where Rules not met, Art.8 outside Rules remains live; proportionality fact-sensitive.',example_case:'Agyarko (clarified insurmountable obstacles + exceptional).'},
  {id:'W023',name:'The Companies Act Derivative',archetype:'Minority shareholder — directors breach of duty',agents:['GUILD','EQUITY'],move:'CA 2006 ss.260-264 derivative claim — two-stage permission process.',authorities:['Companies Act 2006 ss.260-264','Iesini v Westrip Holdings [2009] EWHC 2526','Stainer v Lee [2010] EWHC 1539'],opposition_move:'Company says no benefit; ratifiable breach; alternative remedy.',counter:'s.263 factors — good faith of claimant; importance to company; ratifiability; views of independent shareholders.',why_it_wins:'Statutory framework displaced common law restrictions of Foss v Harbottle in fault cases.',example_case:'Stainer v Lee (permission granted; modest claim against directors).'},
  {id:'W024',name:'The Unfair Prejudice Petition',archetype:'Minority shareholder oppressed in quasi-partnership',agents:['EQUITY','GUILD'],move:'CA 2006 s.994 petition — affairs conducted in manner unfairly prejudicial.',authorities:['Companies Act 2006 s.994','ONeill v Phillips [1999] 1 WLR 1092','Re Saul D Harrison [1995] 1 BCLC 14'],opposition_move:'Directors acted within constitution; commercial judgement.',counter:'Equitable considerations beyond strict legal rights in quasi-partnership; legitimate expectations from informal understanding.',why_it_wins:'s.994 confers broad discretion — share buyout typical remedy at fair value.',example_case:'ONeill v Phillips (HL set framework).'},
  {id:'W025',name:'The Contract Frustration',archetype:'Performance prevented by supervening event',agents:['GUILD'],move:'Doctrine of frustration — radically different obligation through no fault of either party.',authorities:['Davis Contractors v Fareham UDC [1956] AC 696','National Carriers v Panalpina [1981] AC 675','Canary Wharf v EMA [2019] EWHC 335 (Ch)'],opposition_move:'Mere hardship / change in circumstances insufficient.',counter:'Distinguish foreseeable vs unforeseeable; performance impossible vs more onerous; brexit considered (Canary Wharf — held no frustration but on facts).',why_it_wins:'Frustration discharges obligations and triggers Law Reform (Frustrated Contracts) Act 1943 restitution.',example_case:'Krell v Henry [1903] 2 KB 740 (Coronation cases).'},
  {id:'W026',name:'The Misrepresentation Rescission',archetype:'Contract induced by false statement',agents:['EQUITY','GUILD'],move:'Distinguish fraudulent / negligent / innocent misrep; seek rescission + damages.',authorities:['Misrepresentation Act 1967 ss.2(1), 2(2)','Derry v Peek (1889) 14 App Cas 337','Royscot Trust v Rogerson [1991] 2 QB 297'],opposition_move:'Bar to rescission: affirmation / lapse of time / impossibility of restitutio / third-party rights.',counter:'s.2(2) damages in lieu of rescission still available; bars to rescission applied flexibly in equity.',why_it_wins:'s.2(1) fiction-of-fraud measure of damages favourable (Royscot).',example_case:'Smith New Court v Scrimgeour Vickers [1997] AC 254 (fraud damages).'},
  {id:'W027',name:'The Consumer Rights Shield',archetype:'Defective goods/services supplied to consumer',agents:['HEARTH','GUILD'],move:'CRA 2015 — quality (s.9), fit for purpose (s.10), description (s.11); short-term right to reject (30 days).',authorities:['Consumer Rights Act 2015','Sale of Goods Act 1979 (B2B)','Consumer Contracts Regs 2013'],opposition_move:'Trader argues acceptance / use beyond reasonable test period.',counter:'Statutory rights cannot be excluded against consumer; right to repair/replace as Tier 2; price reduction or final right to reject if remedy fails.',why_it_wins:'CRA hierarchy is rigid; trader exclusion clauses void under s.31.',example_case:'(Pre-CRA) Clegg v Olle Andersson [2003] EWCA Civ 320 (rejection of defective yacht).'},
  {id:'W028',name:'The Section 8 Mandatory',archetype:'Tenant 2+ months in arrears — landlord wants possession',agents:['HEARTH','PROCEDURE'],move:'Serve s.8 notice citing Ground 8 (2 months arrears at notice and hearing) — mandatory ground.',authorities:['Housing Act 1988 Sch.2 Grounds','North British Housing v Matthews [2004] EWCA Civ 1736','Knowsley HT v White [2008] UKHL 70'],opposition_move:'Tenant pays down to under 2 months before hearing.',counter:'Both notice date AND hearing date must show 2+ months — but combine Grounds 10/11 (discretionary) as alternative.',why_it_wins:'Mandatory ground gives no judicial discretion on possession; speed matters.',example_case:'Knowsley v White (confirmed mandatory grounds operate strictly).'},
  {id:'W029',name:'The Will Validity Challenge',archetype:'Will allegedly invalid — undue influence / lack of capacity / no due execution',agents:['HEARTH','EQUITY'],move:'Plead one of: (a) Wills Act 1837 s.9 non-compliance; (b) Banks v Goodfellow capacity test; (c) Re Edwards undue influence.',authorities:['Wills Act 1837 s.9','Banks v Goodfellow (1870) LR 5 QB 549','Re Edwards [2007] EWHC 1119 (Ch)'],opposition_move:'Burden on propounder rebuts itself once due execution + capacity shown.',counter:'Suspicious circumstances (drafter takes benefit, deathbed change) shifts evidential burden; undue influence requires no presumption — proof needed.',why_it_wins:'Old age + change of will pattern often falls to careful Banks v Goodfellow analysis.',example_case:'Sharp v Adam [2006] EWCA Civ 449 (testator with MS — capacity failed).'},
  {id:'W030',name:'The Solicitors Act Assessment',archetype:'Client disputes solicitors bill',agents:['GUILD','EQUITY'],move:'Solicitors Act 1974 s.70 — client right to assessment within 1 month automatic; up to 12 months with cause; rare beyond.',authorities:['Solicitors Act 1974 ss.69-70','CPR 46.10','Tim Martin Interiors v Akin Gump [2011] EWCA Civ 1574'],opposition_move:'Bill compliant (s.69 signed, delivered) and time has run.',counter:'Check formal validity strictly — narrative sufficient? — and "special circumstances" for late assessment under s.70(3).',why_it_wins:'s.70 favours client procedurally; one-fifth reduction shifts costs to solicitor.',example_case:'Tim Martin v Akin Gump (bill validity strict).'}
];

// ── Statute corpus (verbatim) ─────────────────────────────────────────────────
export const CORPUS = [
  {id:'sa1974',title:'Solicitors Act 1974',area:'wills-probate',summary:'Foundational statute regulating solicitors bills (ss.69-70), client account (now SRA Rules), and disciplinary jurisdiction.',keyProvisions:['s.69 form of bill','s.70 client right to assessment','s.74 county court assessment']},
  {id:'lsa2007',title:'Legal Services Act 2007',area:'other',summary:'Modernised legal services regulation; created Legal Services Board, LeO, ABS structures; defined reserved legal activities.',keyProvisions:['s.12 reserved activities','s.18 entitled persons','Part 5 ABS licensing']},
  {id:'la1980',title:'Limitation Act 1980',area:'civil-litigation',summary:'Time bars: contract/tort 6yrs, deed 12yrs, PI 3yrs (s.11), defamation 1yr; equitable discretion s.33; latent damage s.14A.',keyProvisions:['s.5 simple contract 6yrs','s.11 PI 3yrs','s.14 date of knowledge','s.33 discretion']},
  {id:'cpr',title:'Civil Procedure Rules 1998',area:'civil-litigation',summary:'Procedural code for England & Wales civil courts. Overriding objective r.1.1. Pre-action conduct PD. Costs Part 44. Disclosure Part 31 / PD51U.',keyProvisions:['r.1.1 overriding objective','Part 36 settlement','Part 24 summary judgment','Part 31 disclosure']},
  {id:'fla1996',title:'Family Law Act 1996',area:'family',summary:'Domestic violence remedies (non-molestation, occupation orders Part IV); divorce procedure framework. DA Act 2021 supplements.',keyProvisions:['Part IV non-molestation','s.33 occupation orders','Part II divorce']},
  {id:'lra2002',title:'Land Registration Act 2002',area:'conveyancing',summary:'Compulsory first registration; e-conveyancing framework; overriding interests Sch.3; adverse possession Sch.6.',keyProvisions:['s.4 compulsory triggers','s.27 dispositions','Sch.3 overriding interests']},
  {id:'wa1837',title:'Wills Act 1837',area:'wills-probate',summary:'Formal requirements for valid will (s.9): writing, signature, witnesses; revocation rules (ss.18-20); attestation (s.15).',keyProvisions:['s.9 due execution','s.15 attestation','s.18 revocation by marriage']},
  {id:'ia1975',title:'Inheritance (Provision for Family and Dependants) Act 1975',area:'wills-probate',summary:'Claims for reasonable financial provision from estate; eligible applicants ss.1-2; 6 month time limit s.4 (extendable).',keyProvisions:['s.1 applicants','s.3 factors','s.4 time limit','s.10 anti-avoidance']},
  {id:'ea2010',title:'Equality Act 2010',area:'employment',summary:'Nine protected characteristics; prohibited conduct types; reasonable adjustments; burden-shifting s.136; public sector equality duty s.149.',keyProvisions:['s.4 characteristics','s.13 direct disc','s.19 indirect','s.26 harassment','s.20 reasonable adjustments']},
  {id:'era1996',title:'Employment Rights Act 1996',area:'employment',summary:'Unfair dismissal (s.94+), redundancy, written particulars, automatic unfair reasons, working time framework. ET claims via ACAS EC mandatory.',keyProvisions:['s.94 right not to be unfairly dismissed','s.98 fairness','s.95 dismissal','s.111 time limit']},
  {id:'companies2006',title:'Companies Act 2006',area:'commercial',summary:'Consolidating statute: incorporation, directors duties (ss.171-177), shareholder rights, derivative claims (ss.260-264), unfair prejudice (s.994).',keyProvisions:['s.172 promote success','s.260 derivative','s.994 unfair prejudice']},
  {id:'ha1988',title:'Housing Act 1988',area:'landlord-tenant',summary:'AST regime; s.8 fault grounds (Sch.2); s.21 no-fault (subject to Renters Reform Bill abolition).',keyProvisions:['s.21 no-fault notice','s.8 fault grounds','Sch.2 grounds']},
  {id:'ca1989',title:'Children Act 1989',area:'family',summary:'Welfare paramount (s.1); s.8 orders (child arrangements, prohibited steps, specific issue); parental responsibility.',keyProvisions:['s.1 welfare checklist','s.8 orders','s.31 care orders']},
  {id:'pace1984',title:'Police and Criminal Evidence Act 1984',area:'crime',summary:'Stop and search powers; arrest; detention timing; access to legal advice (s.58); confession admissibility (s.76); unfair evidence (s.78).',keyProvisions:['s.24 arrest','s.58 access to advice','s.76 confessions','s.78 unfair evidence']},
  {id:'mca1973',title:'Matrimonial Causes Act 1973',area:'family',summary:'Divorce (post Divorce Dissolution and Separation Act 2020 amendments — no-fault); s.25 financial relief factors.',keyProvisions:['s.1 grounds (no-fault)','s.23 financial orders','s.25 factors']}
];

// SRA-critical retention window (SRA Reg 13.5)
export const SRA_RETENTION_YEARS = 6;

// ── Search / lookup ──────────────────────────────────────────────────────────
export function findWeaves({ query = '', agent = '', area = '' } = {}) {
  const q = String(query).toLowerCase().trim();
  const a = String(agent).toUpperCase().trim();
  return WEAVES.filter(w => {
    if (a && !w.agents.includes(a)) return false;
    if (!q) return true;
    const hay = [w.id, w.name, w.archetype, w.move, w.counter, w.why_it_wins,
      (w.authorities || []).join(' '), (w.agents || []).join(' ')].join(' ').toLowerCase();
    return hay.includes(q);
  });
}

export function findCorpus({ query = '', area = '' } = {}) {
  const q = String(query).toLowerCase().trim();
  const a = String(area).toLowerCase().trim();
  return CORPUS.filter(c => {
    if (a && c.area !== a) return false;
    if (!q) return true;
    const hay = [c.id, c.title, c.summary, (c.keyProvisions || []).join(' ')].join(' ').toLowerCase();
    return hay.includes(q);
  });
}

export function askT0(question) {
  const q = String(question || '').toLowerCase().trim();
  if (!q) return null;
  let best = null, bestScore = 0;
  for (const r of T0_RULES) {
    const key = r.q.toLowerCase();
    // token overlap
    const qt = new Set(q.split(/\W+/).filter(t => t.length > 2));
    const kt = new Set(key.split(/\W+/).filter(t => t.length > 2));
    let hits = 0; for (const t of qt) if (kt.has(t)) hits++;
    if (hits > bestScore) { bestScore = hits; best = r; }
  }
  return best ? { q: best.q, a: best.a, disclaimer: DISCLAIMER } : null;
}

export function practiceArea(id) {
  return PRACTICE_AREAS.find(p => p.id === id) || null;
}

// ── Conflict-check (verbatim logic port) ─────────────────────────────────────
export function checkConflicts({ clientName = '', clientEmail = '', partyOpposing = '' } = {}, { clients = [], matters = [] } = {}) {
  const hits = [];
  const name = String(clientName).toLowerCase().trim();
  const email = String(clientEmail).toLowerCase().trim();
  const opp = String(partyOpposing).toLowerCase().trim();
  for (const c of clients) {
    const cn = ([c.firstName, c.lastName].filter(Boolean).join(' ') || '').toLowerCase();
    if (name && cn && cn.includes(name)) hits.push({ type: 'existing-client-name-match', clientId: c.id, name: cn });
    if (email && c.email && c.email.toLowerCase() === email) hits.push({ type: 'existing-client-email-match', clientId: c.id, email: c.email });
    if (opp && cn && cn.includes(opp)) hits.push({ type: 'we-acted-for-opposing-party', clientId: c.id, name: cn });
  }
  for (const m of matters) {
    if (opp && m.partyOpposing && String(m.partyOpposing).toLowerCase().includes(opp)) {
      hits.push({ type: 'opposing-party-match', matterId: m.id, party: m.partyOpposing });
    }
  }
  return hits;
}

// ── Audit chain (SHA-256 tamper-evident, hash-linked · Reg 13.5 friendly) ────
async function sha256hex(s) {
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    const buf = new TextEncoder().encode(s);
    const h = await crypto.subtle.digest('SHA-256', buf);
    return Array.from(new Uint8Array(h)).map(b => b.toString(16).padStart(2, '0')).join('');
  }
  // Node fallback
  const { createHash } = await import('node:crypto');
  return createHash('sha256').update(s).digest('hex');
}

export async function appendAudit(prevChain, { action, reasoning = '', adviserId = '', clientId = '', matterId = '', payload = {}, tool = 'falllegal-sdk', configVersion = '1.0.0' } = {}) {
  const chain = Array.isArray(prevChain) ? prevChain.slice() : [];
  const prevHash = chain.length ? chain[chain.length - 1].docHash : '';
  const i = chain.length;
  const ts = Date.now();
  const payloadStr = JSON.stringify(payload || {});
  const docHash = await sha256hex(prevHash + ts + action + adviserId + clientId + matterId + payloadStr);
  const entry = { id: 'au_' + i + '_' + ts, i, ts, tool, adviserId, clientId, matterId, action, reasoning, configVersion, prevHash, docHash, payload };
  chain.push(entry);
  return { entry, chain };
}

export async function verifyAuditChain(chain) {
  if (!Array.isArray(chain) || !chain.length) return { ok: true, breaks: [] };
  const breaks = [];
  let prevHash = '';
  for (const e of chain) {
    if (e.prevHash !== prevHash) { breaks.push({ i: e.i, reason: 'prevHash mismatch' }); }
    const payloadStr = JSON.stringify(e.payload || {});
    const expect = await sha256hex(prevHash + e.ts + e.action + (e.adviserId || '') + (e.clientId || '') + (e.matterId || '') + payloadStr);
    if (expect !== e.docHash) { breaks.push({ i: e.i, reason: 'docHash mismatch' }); }
    prevHash = e.docHash;
  }
  return { ok: breaks.length === 0, breaks };
}

// ── SRA 6-year retention check (Reg 13.5) ────────────────────────────────────
export function retentionStatus(closedAtMs, now = Date.now()) {
  if (!closedAtMs) return { retainedFor: null, mayDestroy: false, closesInDays: null };
  const ms = now - closedAtMs;
  const days = Math.floor(ms / 86400000);
  const yrs = ms / (365.25 * 86400000);
  const mayDestroy = yrs >= SRA_RETENTION_YEARS;
  const closesInDays = Math.ceil(SRA_RETENTION_YEARS * 365.25) - days;
  return { retainedFor: { days, years: +yrs.toFixed(2) }, mayDestroy, closesInDays };
}

// ── Deadline helpers (verbatim) ──────────────────────────────────────────────
export function daysUntil(iso) {
  if (!iso) return null;
  const d = new Date(iso), n = new Date();
  n.setHours(0, 0, 0, 0); d.setHours(0, 0, 0, 0);
  return Math.round((d - n) / 86400000);
}
export function dueClass(d) {
  if (d == null) return '';
  if (d <= 0) return 'due-now';
  if (d <= 7) return 'due-7';
  if (d <= 14) return 'due-14';
  if (d <= 28) return 'due-28';
  return '';
}
export function dueLabel(d) {
  if (d == null) return '';
  if (d < 0) return Math.abs(d) + 'd overdue';
  if (d === 0) return 'today';
  return d + 'd';
}

// ── Record factories (verbatim shape, ID prefixes preserved) ─────────────────
const uid = (pfx = '') => pfx + (globalThis.crypto?.randomUUID?.().replace(/-/g, '').slice(0, 12) || Math.random().toString(36).slice(2, 14));

export function newFirm(overrides = {}) {
  return Object.assign({
    id: 'fm_' + uid(), createdAt: Date.now(), updatedAt: Date.now(),
    name: '', tradingName: '', sraNumber: '', companiesHouseNo: '', vatNumber: '',
    registeredAddress: { line1: '', line2: '', city: '', postcode: '', country: 'GB' },
    piInsurer: '', piPolicyNo: '', piExpiresAt: null,
    professionalBody: 'SRA', brandColor: '#8b1a1a', brandLogoDataUri: '',
    setupCompletedAt: null, nextMatterRefSeq: 1
  }, overrides);
}

export function newAdviser(overrides = {}) {
  return Object.assign({
    id: 'ad_' + uid(), firmId: '', createdAt: Date.now(), updatedAt: Date.now(), archivedAt: null,
    name: '', email: '', phone: '', smcrRole: 'solicitor',
    practicingCertNo: '', practicingCertExpiry: '',
    cpdHoursThisYear: 0, cpdActivities: [],
    colp: false, cofa: false, status: 'active', startedAt: Date.now(), leftAt: null
  }, overrides);
}

export function newClient(overrides = {}) {
  return Object.assign({
    id: 'cl_' + uid(), firmId: '', createdAt: Date.now(), updatedAt: Date.now(), archivedAt: null,
    title: '', firstName: '', middleName: '', lastName: '', preferredName: '',
    dob: '', gender: '', nationality: 'GB', countryOfResidence: 'GB',
    nino: '', utr: '', taxResidency: ['GB'],
    email: '', phone: '',
    address: { line1: '', line2: '', city: '', region: 'England', postcode: '', country: 'GB', since: '' },
    addressHistory: [], relationships: [],
    clientType: 'individual', entityNumber: '',
    kyc: {
      status: 'pending', riskGrade: 'low', pepFlag: false, pepDetails: '',
      sanctionsStatus: 'not-checked', sanctionsCheckedAt: null, sanctionsCheckedBy: '',
      sourceOfFunds: '', sourceOfFundsNotes: '', sourceOfWealth: '', sourceOfWealthNotes: '',
      vulnerableCustomerFlag: false, vulnerabilityCategory: '', vulnerabilityNotes: '',
      documentsHeld: [], lastReviewAt: null, nextReviewDue: null,
      cdd: {
        identityVerifiedMethod: '', addressVerifiedMethod: '',
        identityVerifiedAt: null, identityVerifiedBy: '',
        beneficialOwners: [], psc: [], sourceOfFundsForMatter: ''
      }
    },
    adviserId: '',
    engagement: {
      startedAt: Date.now(), type: 'transactional', feeBasis: 'hourly',
      feeAgreementHash: '', feeAgreementSignedAt: null,
      initialFee: 0, ongoingFee: 0, nextReviewDue: null
    },
    notes: [], links: {}
  }, overrides);
}

export function newMatter({ clientId = '', firmId = '', responsibleSolicitorId = '', refSeq = 1 } = {}, overrides = {}) {
  const yr = new Date().getFullYear();
  return Object.assign({
    id: 'mt_' + uid(), firmId, clientId, ts: Date.now(), updatedAt: Date.now(), closedAt: null,
    ref: 'M-' + yr + '-' + String(refSeq).padStart(3, '0'),
    title: 'New matter', practiceArea: 'civil-litigation',
    responsibleSolicitorId, supervisingPartnerId: '',
    feeArrangement: 'hourly', hourlyRate: 285, fixedFee: 0, cfaSuccessFeePct: 0, estimatedFees: 5000,
    retainerScope: '', retainerLimits: '',
    conflictCheckedAt: null, conflictCheckedBy: '', conflictStatus: 'pending', conflictNotes: '',
    clientCareSentAt: null,
    status: 'pending', riskRating: 'standard',
    outcomes: [], fileRefs: [], feeRecords: [],
    partyOpposing: '', courtRef: '', limitationDate: null, nextHearingDate: null, nextStepDue: null,
    appliedWeaves: []
  }, overrides);
}

// ── Grouped export ───────────────────────────────────────────────────────────
export default {
  DISCLAIMER, PRACTICE_AREAS, T0_RULES, WEAVES, CORPUS, SRA_RETENTION_YEARS,
  findWeaves, findCorpus, askT0, practiceArea,
  checkConflicts, appendAudit, verifyAuditChain, retentionStatus,
  daysUntil, dueClass, dueLabel,
  newFirm, newAdviser, newClient, newMatter
};

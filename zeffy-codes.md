# Zeffy Donation Form Codes

Reference for all Zeffy embed codes used on the ECIC / Masjid Al-Athar site.
Each campaign has a **button embed attribute**, a **full-page iframe URL**, and shares a common **header script**.

**Site route:** `/donate/{slug}`

---

## Shared — Website Header Script

Add once to the site head (deduplicated in `src/lib/zeffy-donations.ts` → `ZEFFY_HEADER_SCRIPT_SRCS`).

```html
<script src="https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-script.min.js"></script>
```

---

## 1. Zakat

| Field | Value |
|---|---|
| **Slug** | `zakat` |
| **Route** | `/donate/zakat` |
| **Status** | Configured |

### Button embed (pop-up attribute)

```
zeffy-form-link="https://www.zeffy.com/embed/donation-form/donate-to-change-lives-18022?modal=true"
```

### Full-page iframe URL

```
https://www.zeffy.com/embed/donation-form/donate-to-change-lives-18022
```

---

## 2. Sadaqah

| Field | Value |
|---|---|
| **Slug** | `sadaqah` |
| **Route** | `/donate/sadaqah` |
| **Status** | Configured |

### Button embed (pop-up attribute)

```
zeffy-form-link="https://www.zeffy.com/embed/donation-form/donate-to-change-lives-18027?modal=true"
```

### Full-page iframe URL

```
https://www.zeffy.com/embed/donation-form/donate-to-change-lives-18027
```

### Header script

Same as shared header script (no additional script needed).

---

## 3. New Masjid Construction

| Field | Value |
|---|---|
| **Slug** | `construction` |
| **Route** | `/donate/construction` |
| **Status** | Configured |

### Button embed (pop-up attribute)

```
zeffy-form-link="https://www.zeffy.com/embed/donation-form/masjid-construction-2?modal=true"
```

### Full-page iframe URL

```
https://www.zeffy.com/embed/donation-form/masjid-construction-2
```

### Header script

Same as shared header script (no additional script needed).

---

## 4. Masjid Operations

| Field | Value |
|---|---|
| **Slug** | `masjid-operations` |
| **Route** | `/donate/masjid-operations` |
| **Status** | Configured |

### Button embed (pop-up attribute)

```
zeffy-form-link="https://www.zeffy.com/embed/donation-form/donate-in-the-name-of-allah?modal=true"
```

### Full-page iframe URL

```
https://www.zeffy.com/embed/donation-form/donate-in-the-name-of-allah
```

### Header script

Same as shared header script (no additional script needed).

---

## Payment confirmation emails (Zeffy dashboard)

Card donations are processed by **Zeffy**, not by this website’s SMTP.
Set **every** Zeffy form’s org notification / confirmation email to:

`masjidalathar@gmail.com`

| Campaign | Notify / org email |
|---|---|
| Zakat | `masjidalathar@gmail.com` |
| Sadaqah | `masjidalathar@gmail.com` |
| New Masjid Construction | `masjidalathar@gmail.com` |
| Masjid Operations | `masjidalathar@gmail.com` |

Website contact-form emails (Gmail SMTP via `/api/contact`) also go to `masjidalathar@gmail.com`.

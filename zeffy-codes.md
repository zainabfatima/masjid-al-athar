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
zeffy-form-link="https://www.zeffy.com/embed/donation-form/zakat-ul-maal-3?modal=true"
```

### Full-page iframe URL

```
https://www.zeffy.com/embed/donation-form/zakat-ul-maal-3
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
zeffy-form-link="https://www.zeffy.com/embed/donation-form/sadaqah-13?modal=true"
```

### Full-page iframe URL

```
https://www.zeffy.com/embed/donation-form/sadaqah-13
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

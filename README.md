# vidushika.com

Personal resume site for Vidushika Vij, hosted on GitHub Pages at [vidushika.com](https://vidushika.com).

## Setup

### GitHub Pages
- Repo: `rvij/vidushika.com`
- Branch: `main`, root `/`
- Custom domain configured via `CNAME` file

### DNS Records (Squarespace)
Add these under **Custom Records** at `account.squarespace.com/domains/managed/vidushika.com/dns/dns-settings`:

| Type | Name | Data |
|------|------|------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `rvij.github.io` |

Click **ADD RECORD**, fill in Type, Name, and Data (Priority N/A, TTL 1 hr), and repeat for each row.

Once DNS propagates (5–30 min, up to a few hours), `https://vidushika.com` will be live with a GitHub-provisioned SSL certificate.

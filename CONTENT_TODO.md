# Replace before launch (all placeholders, none are real school facts)
- `src/content/site.ts`: school name, address, phone, email, social links (empty values are hidden).
- `.env`: `INQUIRY_WEBHOOK_URL` (inquiry form delivery; without it the form shows an error), `ANTHROPIC_API_KEY` + `SCHOOL_FACTS` (AI chat; without them it points visitors to the inquiry form).
- `src/messages/*.json`: statistics, testimonials, news, leadership names, timeline, accreditations, grade ranges, curriculum, admission documents and FAQ answers. Have a native Arabic speaker review the Arabic.
- `src/lib/photos.ts`: swap stock photos for real school photos (Arts and Events cards have none yet).
- Campus page: facility descriptions and feature bullets are generic; edit `campus` in `src/messages/*.json`. Photos in `src/lib/photos.ts` (activity areas has none yet).
- Student Life page: clubs and activities are generic; edit `student` in `src/messages/*.json`. Photos in `src/lib/photos.ts` (arts and events have none yet).
- News & Events: all articles and events live in `src/content/news.ts` (titles, dates, text, photos). They are invented samples; replace with real news before launch.
- Contact page: fill `address`, `phone`, `email`, `hours`, `mapEmbed` in `src/content/site.ts` (empty values hide the card or map). The contact form uses the same `INQUIRY_WEBHOOK_URL` as the inquiry form.

import { getContactPage } from '@/sanity/utils';
import Link from 'next/link';

export const ContactFooter = async () => {
  const copyYear = new Date().getFullYear();
  const contactLinks = await getContactPage();

  return (
    <footer id="contact">
      <section className="max-w-4-xl mx-auto bg-terracota-300 p-4 pb-0">
        <address className="not-italic">
          <h6 className="text-2xl font-semibold md:text-lg">Contact</h6>
          <ul>
            {contactLinks.links.map(link => (
              <li
                key={link._key}
                className="pt-4 text-lg underline underline-offset-4 md:pt-2 md:text-sm">
                <Link href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </address>
        <div className="flex flex-col sm:gap-2">
          <p className="text-right text-xs"> &copy; {copyYear} - Jose Tow Echenique</p>
        </div>
      </section>
    </footer>
  );
};

import { getContactLinks } from '@/sanity/utils';
import Link from 'next/link';

export const ContactFooter = async () => {
  const copyYear = new Date().getFullYear();
  const contactLinks = await getContactLinks();

  return (
    <footer id="contact">
      <section className="max-w-4-xl mx-auto p-4 pb-0 ">
        <address className="not-italic">
          <h6>Contact</h6>
          <ul>
            {contactLinks.map(link => (
              <li key={link._id}>
                <Link href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
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

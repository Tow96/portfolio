export const ContactFooter = () => {
  const copyYear = new Date().getFullYear();

  return (
    <footer id="contact">
      <section className="max-w-4-xl mx-auto p-4 pb-0 ">
        <address className="not-italic">
          <h6>Contact</h6>
          <ul>
            <li>
              <a href="https://read.cv" target="__blank">
                CV (TODO)
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/josetowechenique" target="__blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Tow96" target="__blank">
                Github
              </a>
            </li>
          </ul>
        </address>
        <div className="flex flex-col sm:gap-2">
          <p className="text-right text-xs"> &copy; {copyYear} - Jose Tow Echenique</p>
        </div>
      </section>
    </footer>
  );
};

import {Metadata} from 'next';
import {Section} from '@components/Section';
import {Container} from '@components/Container';
import {InternalLink} from '@components/InternalLink';
import {ExternalLink} from '@components/ExternalLink';
import {TitleShape} from '@components/TitleShape';
import {faTerminal, faUserFriends} from '@fortawesome/free-solid-svg-icons';
import styles from './about.module.scss';

export const metadata: Metadata = {
  title: 'About',
  description: 'Personal website of Ryan Tang.',
};

export default function About() {
  return (
    <Section grow className={styles.about}>
      <Container className={styles.about__body}>
        <TitleShape icon={faTerminal}>Ryan Tang</TitleShape>
        <small className={styles['about__sub-text']}>
          A Java web developer living in an AI world
        </small>

        <div className={styles.about__bio}>
          <p>
            I am a China based full stack web developer.
          </p>
        </div>

        <TitleShape small level={2} icon={faUserFriends}>
          Work &amp; Socials
        </TitleShape>
        <small className={styles['about__sub-text']}>
          Find my work and musings here or on these platforms
        </small>

        <ul className={styles['about__social-list']}>
          <DeepLink href="/blog" name="Blog" />
          <DeepLink href="/projects" name="Projects &amp; Hobbies" />
          <SocialLink href="https://github.com/hitme" name="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/zhilu-tang-97b1b92b/" name="LinkedIn" />
        </ul>

        <p className={styles['about__email']}>
          Want to get in touch with me directly? Email me at{' '}
          <ExternalLink href="mailto:zhilu.tang@gmail.com">zhilu.tang@gmail.com</ExternalLink>
          .
        </p>
      </Container>
    </Section>
  );
}

interface LinkProps {
  href: string;
  name: string;
}

function SocialLink({href, name}: LinkProps) {
  return (
    <li className={styles['about__social-list-item']}>
      <ExternalLink href={href} noIcon>
        {name}
      </ExternalLink>
    </li>
  );
}

function DeepLink({href, name}: LinkProps) {
  return (
    <li className={styles['about__social-list-item']}>
      <InternalLink to={href}>{name}</InternalLink>
    </li>
  );
}

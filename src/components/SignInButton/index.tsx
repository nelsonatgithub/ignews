import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, useSession, signOut } from 'next-auth/client';
import styles from './styles.module.scss';


export function SignInButton() {
    const [session] = useSession();

    return session ? (
        <button
            type="button"
            className={styles.SignInButton}
            onClick={() => signOut()}
        >
            <FaGithub color="#04d361" />
            {session.user.email}
            <FiX 
                color="#737380" 
                className={styles.closeIcon} 
            />
        </button>
    ) : (
        <button
            type="button"
            className={styles.SignInButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color="#eba417" />
            Sign in with Github
        </button>
    );
}
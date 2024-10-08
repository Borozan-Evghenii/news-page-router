import { Cross1Icon, HamburgerMenuIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { Button, Input } from '@/components/ui';
import { useCategoryQuery } from '@/utils/api/hooks';
import { ROUTES } from '@/utils/constants/routerPaths';
import { useOnClickOutside } from '@/utils/hooks';

export function Header() {
  const router = useRouter();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
  const { data } = useCategoryQuery();

  const closeModal = () => {
    setOpen(false);
  };
  useOnClickOutside(menuRef, closeModal);

  const toggleModal = () => {
    setOpen((prev) => !prev);
    inputRef.current?.focus();
  };

  const blockScroll = (open: boolean) => {
    if (open) {
      document.body.classList.add('h-[100vh]', 'overflow-hidden');
    } else {
      document.body.classList.remove('h-[100vh]', 'overflow-hidden');
    }
  };

  React.useEffect(() => {
    blockScroll(open);
  }, [open]);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const search = formData.get('search') as string;
    router.push({ pathname: ROUTES.SEARCH, query: { search } }).catch(() => {});
  };

  return (
    <header className='sticky top-0 w-full bg-white'>
      <div className='relative flex items-center justify-between border-b border-gray-200 p-4'>
        <div className='flex items-center gap-4'>
          <Button variant='icon' onClick={toggleModal}>
            {!open ? <HamburgerMenuIcon /> : <Cross1Icon />}
          </Button>
          <Button variant='icon' onClick={toggleModal}>
            <MagnifyingGlassIcon />
          </Button>
        </div>

        <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1'>
          <div className='flex h-6 w-6 items-center justify-center bg-black p-2 text-lg font-bold uppercase text-white'>
            W
          </div>
          <div className='flex h-6 w-6 items-center justify-center bg-black p-2 text-lg font-bold uppercase text-white'>
            W
          </div>
          <div className='flex h-6 w-6 items-center justify-center bg-black p-2 text-lg font-bold uppercase text-white'>
            N
          </div>
        </div>

        <div className='hidden items-center gap-2 sm:flex'>
          <Button variant='contained'>
            <Link href={ROUTES.REGISTER}>Register</Link>
          </Button>
          <Button variant='text'>
            <Link href={ROUTES.SIGN_IN}>Sign In</Link>
          </Button>
        </div>

        <div
          className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-full h-[100vh] border-t border-gray-200`}
        >
          <div ref={menuRef} className='w-80 min-w-80 overflow-y-auto bg-white'>
            <form className='sticky top-0 bg-gray-200 p-2' onSubmit={onFormSubmit}>
              <Input ref={inputRef} autoFocus name='search' placeholder='Search news by keywords' />
            </form>
            <nav className='mt-5 px-2'>
              <div className='flex items-center justify-center gap-2 md:hidden'>
                <Button active variant='contained'>
                  <Link href={ROUTES.REGISTER}>Register</Link>
                </Button>
                <Button variant='text'>
                  <Link href={ROUTES.SIGN_IN}>Sign In</Link>
                </Button>
              </div>

              <ul className='flex w-full flex-col'>
                {data?.data.categories.map((category) => (
                  <li key={category}>
                    <Button variant='list'>
                      <Link
                        href={{
                          pathname: ROUTES.CATEGORY,
                          query: {
                            category
                          }
                        }}
                      >
                        {category}
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className='w-full bg-black opacity-30' />
        </div>
      </div>
      <nav className='hidden items-center justify-center border-b border-gray-200 lg:flex'>
        <ul className='flex items-center'>
          {data?.data.categories?.slice(0, 9).map((category) => (
            <li key={category}>
              <Button variant='category'>
                <Link href={{ pathname: ROUTES.CATEGORY, query: { category } }}>{category}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

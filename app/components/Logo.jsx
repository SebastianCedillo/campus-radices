import Image from 'next/image';

export default function Logo({ size = 48 }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Campus Radices"
      width={size}
      height={size}
      style={{ objectFit: 'contain', borderRadius: '50%' }}
      priority
    />
  );
}

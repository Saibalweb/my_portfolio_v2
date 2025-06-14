import { MDXRemote } from 'next-mdx-remote/rsc'
import type { MDXRemoteProps } from 'next-mdx-remote/rsc'

export default function MDXContent(props: MDXRemoteProps) {
  return <MDXRemote {...props} />;
}
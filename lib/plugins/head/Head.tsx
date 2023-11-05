import { ComponentChildren } from "preact";
import { Head as _Head } from "$fresh/runtime.ts";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
} from "netzo/plugins/auth/utils/constants.ts";
import Meta, { type MetaProps } from "./Meta.tsx";

export type HeadProps =
  & Partial<Omit<MetaProps, "href">>
  & Pick<MetaProps, "href">
  & {
    children?: ComponentChildren;
  };

export default function Head(props: HeadProps) {
  return (
    <_Head>
      <Meta
        title={props?.title ? `${props.title} ▲ ${SITE_NAME}` : SITE_NAME}
        description={props?.description ?? SITE_DESCRIPTION}
        href={props.href}
        imageUrl="/cover.png"
      />
      {props.children}
    </_Head>
  );
}
import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import AuthorInfo from "@site/src/components/AuthorInfo";
import AuthorGrid from "@site/src/components/AuthorGrid";

export default {
    // Re-use the default mapping
    ...MDXComponents,
    AuthorInfo,
    AuthorGrid
};
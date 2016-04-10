---
layout: post
title:  'Sample Heading'
subtitle: 'Premature Optimisation is the root of all evil'
date:   2016-04-09 11:18:19 +0530
categories: jekyll
---
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem **Ipsum** has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has `survived` not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

Code snippets:

{% prism javascript %}
function binarySearch (arr, item) {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo < hi) {
    const mid = parseInt((lo + hi) / 2);

    if (item === arr[mid]) return mid;
    else if (item < arr[mid]) hi = mid - 1;
    else if (arr[mid] < item) lo = mid + 1;
  }
}
{% endprism %}

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

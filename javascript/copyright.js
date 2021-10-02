// This script for set copyright text.

// Start year: 2021

const copyrightHTML =
`
<div style="font-family: 'OpenSans'">
  The X Programming Language Team
  <br>
  Copyright ${new Date().getFullYear()}
</div>
`;

const copyright = document.getElementById('copyright');

copyright.innerHTML = copyrightHTML;

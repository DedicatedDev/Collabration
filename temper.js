<div style  = {{marginTop:"10vh"}}></div>
{['About us', 'FAQ', 'Add Feed', 'Retailers'].map((text, index) => (
  <ListItem button key={text}>
    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
    <ListItemText primary={text} />
  </ListItem>
))}
</List>
<Divider />
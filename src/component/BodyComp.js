import React, { Component } from 'react'
import {Box, Container} from '@material-ui/core'

export default class BodyComp extends Component {
  render() {
    return (
      /*all*/
      <Box  zIndex='1' position="absolute" top="20%" bottom='0' right="15%" left="15%" style={border} >
            {/*photo*/}
            <Box zIndex='3' position="absolute" left="0" right="0%" top="-100px">
              <img width='200px' height='200px' src={process.env.PUBLIC_URL + '/images/profileImage.png'} style={centerImg} alt="background" /> 
            </Box>
            {/*body*/}
            <Box  position='relative' top='100px'>
              
              <img width='150' style={styleImg} src={process.env.PUBLIC_URL + '/images/moralesCesarLogo.png'} alt="background" /> 
              <hr style={border}/>
              <Container>
            <p style={{color:'white'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt nibh ut suscipit sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut a ullamcorper sapien. Aenean in risus sit amet erat tempor ultricies quis non ligula. Phasellus neque massa, tempus eget aliquam quis, hendrerit sit amet felis. Maecenas rhoncus tellus sed dictum mattis. Donec gravida, mi sed viverra condimentum, massa turpis ultrices lacus, eu accumsan ante urna eu metus. Nulla vestibulum feugiat venenatis.

Sed quis magna malesuada, luctus nisi eget, varius sapien. Praesent efficitur maximus enim in pulvinar. Duis ornare convallis massa, id ultricies lectus rhoncus vel. Ut sodales dui eu turpis aliquam hendrerit. Duis ut eros a felis mattis bibendum pulvinar tempus magna. Nam fringilla venenatis augue, ac imperdiet sapien viverra in. Nullam odio dui, placerat sed rhoncus a, facilisis elementum nisi. Praesent eleifend velit tellus, vitae tincidunt urna venenatis eu. In rhoncus ante dui, a volutpat felis mollis in. Nunc vehicula massa sed felis molestie pellentesque. Vestibulum eget quam ex. Duis vitae tempor leo. Nunc at consequat quam. Nam eu dui lorem. Donec tempor orci nec nunc semper placerat.

Donec eu lobortis ligula, eu lacinia tortor. Quisque placerat cursus pretium. Aliquam vel feugiat sapien, quis gravida nisi. Aliquam erat volutpat. Cras feugiat odio id nisi posuere lobortis. Integer auctor ex in est ornare finibus. Donec id nisl posuere, fringilla nibh nec, pretium odio. Aenean lectus dui, scelerisque vel sapien in, ultrices porta eros. Sed fermentum posuere consectetur. Nunc tempus egestas diam, sit amet pharetra tortor ultrices nec. Pellentesque euismod urna sed sapien semper, consectetur viverra odio ultricies. Fusce accumsan orci sed elit gravida, vitae dapibus mauris sollicitudin. Aenean convallis rutrum metus vel placerat. Sed lobortis, lorem scelerisque faucibus tempor, mauris ex consequat lectus, eget dignissim nibh mauris a enim. Donec interdum nulla luctus ante vulputate, iaculis eleifend libero maximus. Quisque molestie auctor arcu, in dapibus velit suscipit quis.

Nulla nec blandit orci. Ut tristique venenatis sem. Nam turpis dui, iaculis vitae ullamcorper vitae, placerat sit amet mi. Praesent cursus mauris aliquet, blandit dolor imperdiet, blandit urna. Nullam ultricies lacus vel dignissim mattis. Etiam tincidunt enim est, id mattis enim aliquet in. Praesent malesuada aliquet hendrerit. In hac habitasse platea dictumst. Vestibulum augue justo, congue non egestas et, aliquet suscipit leo. Nunc gravida, turpis at dictum viverra, risus justo suscipit diam, eget consequat nisl arcu non leo. Praesent rhoncus tristique felis ac luctus. Ut eget leo quis velit accumsan fringilla ut in diam. Aliquam sed dignissim diam, in fermentum odio. Etiam vel leo vel neque porttitor varius.

Morbi vel dolor nunc. Fusce non ante et nisl aliquet molestie a vel est. Nulla malesuada lectus in odio aliquam, sit amet gravida mi rutrum. In dignissim enim leo, ac interdum felis ullamcorper sed. Quisque at dui at leo sodales vestibulum et vel turpis. Morbi velit tortor, malesuada id ex at, efficitur ultricies leo. Pellentesque nisi massa, scelerisque sit amet risus nec, pretium rutrum sapien. Nullam luctus venenatis sapien id rutrum. Duis quis posuere eros, gravida auctor augue. In semper tristique mattis. Nunc laoreet a lacus a pulvinar. Curabitur semper sodales dolor, eget eleifend ligula condimentum quis. Nunc lorem magna, viverra sit amet sollicitudin a, pulvinar ac dui.

Sed vitae sapien et odio eleifend efficitur. Suspendisse ornare, tellus ac fermentum viverra, arcu mauris semper orci, non lobortis tortor lectus nec nunc. Nam eleifend lacinia leo ut convallis. Integer tincidunt rhoncus sagittis. Nulla quis sodales orci. Aenean molestie sodales ullamcorper. Suspendisse metus mi, imperdiet vitae faucibus et, venenatis ut orci. Nam malesuada metus eros, a tincidunt nisl efficitur vitae. Nam nibh enim, facilisis id hendrerit a, lacinia sollicitudin justo. Suspendisse euismod leo et nunc lobortis commodo. Cras viverra scelerisque libero eget hendrerit. In sed eros id ante dapibus fringilla. Phasellus tortor risus, facilisis vitae est ut, posuere egestas tortor.

Fusce ornare est eu ligula lobortis, quis vehicula ipsum euismod. Phasellus aliquam est eget erat maximus, et pharetra odio sagittis. Morbi eros elit, porttitor ac leo a, posuere tempor magna. Suspendisse tincidunt tincidunt mauris, sit amet ultrices orci placerat et. Curabitur mattis non nibh vitae bibendum. Pellentesque sed efficitur ligula, et tincidunt purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus sed velit ex. Proin dapibus ex lorem, at ultricies augue laoreet at. In velit elit, efficitur dignissim tristique nec, pulvinar a ex. Donec dapibus nulla nunc, sollicitudin euismod mauris aliquam quis. Etiam efficitur et odio vel fermentum. Aenean quis aliquam nulla. In at dolor velit. Proin nec tellus eget neque commodo lobortis. Cras laoreet ligula eget imperdiet egestas.

Maecenas quis augue venenatis, egestas ex sit amet, suscipit quam. Donec quis est nec dolor vehicula gravida eu vel nibh. Donec et tellus at urna eleifend tincidunt. Nullam vitae bibendum urna. Vivamus a elit eu lorem dictum aliquam. Suspendisse vel convallis arcu, vitae congue mauris. Aenean porta libero non consequat dictum. Suspendisse eu ex nec ex cursus dapibus eget et elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce laoreet consequat magna et elementum. In posuere quam at elit pharetra, vel suscipit est facilisis. Ut id felis mollis, ornare felis sit amet, ullamcorper dolor. Nullam nisi nisl, rutrum vitae sagittis nec, euismod non est.

Etiam ut mollis erat. Duis quis volutpat nisi, in elementum nulla. Nulla laoreet convallis metus, ut tincidunt neque dignissim vel. In hendrerit rhoncus sapien eget consectetur. Nunc placerat lectus sed ante vestibulum dignissim. Sed dignissim, neque sed lacinia ornare, odio tellus auctor dolor, id cursus turpis leo vitae enim. Sed sit amet eleifend nulla. Praesent suscipit purus id pharetra interdum. In in sapien sed erat hendrerit lobortis. Fusce sit amet maximus leo. Quisque quam massa, venenatis ut sapien nec, aliquet tempor dolor. Cras eleifend purus id nunc vehicula, at vestibulum massa congue. Vivamus feugiat sem et orci porttitor auctor. Etiam nec mi semper, hendrerit felis id, bibendum ligula. Nunc id imperdiet enim.

Aliquam tincidunt lacinia tellus, non ultrices mauris fringilla sed. Ut porttitor non nisl non bibendum. Praesent auctor ipsum a lorem rutrum eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam blandit nunc sit amet mattis imperdiet. Mauris pellentesque tristique sem, quis luctus sapien. Proin eget nibh turpis. Mauris elementum in nunc et vehicula. Vestibulum non tellus a eros euismod vulputate. Curabitur gravida velit mi, vel maximus ante dignissim quis. Etiam convallis, sapien id lobortis pellentesque, turpis tellus suscipit lectus, non tempus nisi ante eget tellus. 
            </p></Container>
            </Box>
      </Box>
    )
  }
}

const border = {
  border: '2px solid white',
  background: 'black',
  borderRadius: '10px',
}
const centerImg = {
  display:'block',
  margin:'auto',
  borderRadius: '100px',
  border: '2px solid white'
}

const styleImg = {
  display:'block',
  margin:'auto',
  borderRadius: '10px 10px',

  border: '1px solid white'
}
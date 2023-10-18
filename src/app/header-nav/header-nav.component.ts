import { Component } from '@angular/core'

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {
  public links: Array<{ title: string, path: string }> = [{ title: 'Home', path: '/home' }, { title: 'Posts', path: '/posts' }]
  activeLink = this.links[0]
}

import { NavLink } from "./NavLink";

export const Navigation = () => {
  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <NavLink
              to="/"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary border-b-2 border-primary"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary border-b-2 border-primary"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary border-b-2 border-primary"
            >
              Contact
            </NavLink>
            <NavLink
              to="/team"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary border-b-2 border-primary"
            >
              Team
            </NavLink>
            <NavLink
              to="/admin"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary border-b-2 border-primary"
            >
              Admin
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

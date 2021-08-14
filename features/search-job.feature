Feature: Search job on epam.com
  This feature verify Search Job functionalitiy.

  Scenario: Open Careers page
    When I open epam.com
    When I Click on Careers tab
    Then Page Title is "Explore Professional Growth Opportunities | EPAM Careers"

  Scenario Outline: Fill in Search Form and find job
    When I open epam.com
    When I Click on Careers tab
    When I Enter "<Keyword>" in Keyword field
    When I Select "All Cities in Belarus" option in Location dropdown
    When I Click "Find" button
    Then Result line appears

    Examples:
        | Keyword                   | 
        | Software Testing Engineer | 
        | Software Engineer         |
        | Accountant                |
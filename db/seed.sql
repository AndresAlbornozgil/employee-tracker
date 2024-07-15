INSERT INTO department (name)
VALUES ('Information Technology'),
('Sales'),
('Human Resources'),
('Customer Service'),
('Finance'),
('Marketing'),
('Operations'),
('Adminstrative');

INSERT INTO role (title, salary, department_id)
VALUES ('IT Support', 55000, 1),
('Systems Admin', 90000, 2),
('Sales Rep', 50000, 3),
('Sales Manager', 11000, 4),
('Recruiter', 60000, 5),
('Trainer', 55000, 6),
('Customer Service Rep', 35000, 7),
('Customer Service Manager', 60000, 8),
('Accountant', 60000, 8),
('Auditor', 65000, 6),
('Marketing Research Analyst', 75000, 4),
('Social Media Manager', 60000, 5),
('Logistics Coordinator', 45000, 3),
('Operations Manager', 60000, 5),
('Administrative Assitant', 35000, 1),
('Administrative Supervisor', 55000, 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Liam', 'Hawthorne', 1, null),
('Aria', 'Montgomery', 2, 1),
('Ethan', 'Blackwood', 3, 2),
('Luna', 'Whitfield', 4, null),
('Noah', 'Kensington', 5, 3),
('Violet', 'Everly', 6, 4),
('Caleb', 'Ashford', 7, 6),
('Ruby', 'Sinclair', 8, 9),
('Owen', 'Thorne', 9, null),
('Zara', 'Kingsley', 10, 8);

package ru.otus.shurupov.jointpurchase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import ru.otus.shurupov.jointpurchase.domain.Product;

@CrossOrigin
public interface ProductRepository extends JpaRepository<Product, Long> {
}

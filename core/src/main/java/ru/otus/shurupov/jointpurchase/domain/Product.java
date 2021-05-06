package ru.otus.shurupov.jointpurchase.domain;

import lombok.Data;
import ru.otus.shurupov.jointpurchase.converter.HashMapConverter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Map;

@Data
@Entity
@Table(name = "c_product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @SuppressWarnings("JpaAttributeTypeInspection")
    @Convert(converter = HashMapConverter.class)
    @Column(name = "properties")
    private Map<String, Object> properties;

    @Column(name = "option_name")
    private String optionName;

    /*@Type(type = "jsonb")
    @Column(columnDefinition = "jsonb")
    private List<String> options;*/

    @Column(name = "name")
    private Integer price;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
